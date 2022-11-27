import React, { useState, useEffect } from 'react'

function MoviesTable(props) {
  const { filteredContent,content,isLoaded,setContent  } = props;
  // console.log("moviesTable " + cGenre)
    // console.log("moviesTable cpage " + cPage)
 

const handleDelete = (toBeDeletedMovie)=>{
  let restMovies = content.filter((movieObj)=>{
    return movieObj._id != toBeDeletedMovie;
  })
  setContent([...restMovies]);
}


  return (
    <div>{isLoaded == true ? <div className='font-bold'>Loading.......</div> :
      <table className="table-auto">
        <thead>
          <tr >
            <th className="px-4">#</th>
            <th className="px-4">Title</th>
            <th className="px-4">Genre</th>
            <th className="px-4">Stock</th>
            <th className="px-4">Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            filteredContent.map((movieObj, idx) => {
              console.log("..........>>>>>>>>>>>>>???????????//////////////////")
              return (
                <tr key ={movieObj._id}>
                  <td className="px-4 text-center">{idx + 1}</td>
                  <td className="px-4 text-center">{movieObj.title}</td>
                  <td className="px-4 text-center">{movieObj.genre.name}</td>
                  <td className="px-4 text-center">{movieObj.numberInStock}</td>
                  <td className="px-4 text-center">{movieObj.dailyRentalRate}</td>
                  <td > <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={function(){handleDelete(movieObj._id)}}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>}

    </div>
  )
}

export default MoviesTable