import React, {useState, useEffect} from 'react'

function Genre(props) {
  const {getGenreFromGenreComp} = props;
  const [isLoaded, setIsLoaded] = useState(true);
  const [content, setContent] = useState([]);
  useEffect(function(){
    (async function () {
      // fetch is the inbuilt fearure of browser that makes the request to get data => promise based
      let responce = await fetch("https://react-backend101.herokuapp.com/genres");
      responce = await responce.json();
      // console.log(responce.genres);
      setIsLoaded(false);
      setContent(responce);
    })() // by doing this there is no error occured in useState
  }, [])
  const handleGenre =(e)=>{
    //  console.log("genreObj " + e.target.textContent);
     getGenreFromGenreComp(e.target.textContent);
    //  getGenreFromGenreComp(e.target.textContent) this can also be done.
  }
  return (
    <div className='Genre'>
      <div className='mr-6 border-2 w-40 h-10 text-center font-bold '  onClick={handleGenre}>All Genre</div>
     {isLoaded == true ?  <div className='font-bold'>Loading.......</div> :
       content.genres.map((genreObj)=>{
        return(
          <div key ={genreObj._id} className='mr-6 border-2 w-40 h-10 text-center font-bold' onClick={handleGenre}>{genreObj.name}</div>
        )
       })
     }
    </div>
  )
}

export default Genre