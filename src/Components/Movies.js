import React, { useState, useEffect } from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'

function Movies(props) {
  const {cGenre,cPage,setCPage} = props;
  const [searchMovieName, setSearchMovieName] = useState('');
  const [pageCount, setPageCount] = useState(4)
  const [isLoaded, setIsLoaded] = useState(true);
  const [content, setContent] = useState([]);

  useEffect(function(){
    async function fn () {
      // fetch is the inbuilt fearure of browser that makes the request to get data => promise based
      let responce = await fetch("https://react-backend101.herokuapp.com/movies");
      responce = await responce.json();
      // console.log(responce.movies);
      setIsLoaded(false);
      setContent(responce.movies);
    }
    fn();
  }, []);
  // console.log("Movies setCpage " + cPage)

   const getSearchStrFromInputBox =(searchText)=>{
    // console.log(searchText + "==============");
    setSearchMovieName(searchText);
    setCPage(1)
  }
 const getPageCountFromInputBox = (pageCount)=>{
  console.log("Movies " + pageCount);
  setPageCount(pageCount);
  setCPage(1)
 }


 let filteredContent = [];
 let totalPagesMovies;
  if (content) {
    filteredContent = content;
    // handle searching
    if (searchMovieName) {
      filteredContent = content.filter((movieObj) => {
        let titleInLowerCase = movieObj.title.toLowerCase();
        let searchTextInLowerCase = searchMovieName.toLowerCase();
        return titleInLowerCase.includes(searchTextInLowerCase);
      })
    
    }
    // handle genre
    if (cGenre) {
      filteredContent = filteredContent.filter((movieObj) => {
        return movieObj.genre.name == cGenre
      })
      console.log("Movies Table " + filteredContent)// movie will set from the zeroth index so after searching and
      // genre Change set the current page to 1 if it was not 1
    }

    totalPagesMovies = filteredContent; //  After searching and genre search total movies will be  passed to pagination
    // handle pagecount
    let sIdx =   Number(pageCount) * (cPage -1);
    // console.log("sIdx " + sIdx)
    // console.log("type of sIdx " +  typeof(sIdx));
    let lIdx = sIdx + Number(pageCount);
    // console.log("pageCount " +typeof(pageCount));
    // console.log("type of lIdx " +  typeof(lIdx));
    // console.log("lIdx " + lIdx);
    filteredContent = filteredContent.slice(sIdx, lIdx);
  }


//  console.log("Movies " + cGenre)
  return (
     <div>
       <InputBox getSearchStrFromInputBox = {getSearchStrFromInputBox} getPageCountFromInputBox = {getPageCountFromInputBox}/>
       <MoviesTable filteredContent = {filteredContent}
        isLoaded = {isLoaded} content = {content} setContent = {setContent}  />
       <Pagination pageCount = {pageCount} totalPagesMovies = {totalPagesMovies} cPage = {cPage} setCPage= {setCPage}/>
     </div>
  )
}

export default Movies;