import React,{useState} from 'react'
import Genre from './Genre'
import Movies from './Movies'

function Main() {
  const [cGenre, setcGenre] = useState("");
  const [cPage, setCPage] = useState(1);
  const getGenreFromGenreComp =(cGenre)=>{
  //  console.log("Main " + cGenre);
   if(cGenre == "All Genre"){
    setcGenre(""); // to display the all genre movies(will not implement the genre filtering )  
   }else{
    setcGenre(cGenre);
   }
   setCPage(1);
   
  }
  return (
    <div className='flex'>
      <Genre getGenreFromGenreComp = {getGenreFromGenreComp} />
      <Movies cGenre = {cGenre} cPage = {cPage} setCPage = {setCPage}/>
    </div>
  )
}

export default Main