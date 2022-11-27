import React from 'react'

function Pagination(props) {
  const { pageCount, totalPagesMovies , cPage, setCPage } = props;
  // console.log("pagination pagecount " + pageCount)
  let pageArr = [];
 if(totalPagesMovies){
  let numbersOfPages = Math.ceil(totalPagesMovies.length / pageCount);
  for (let i = 1; i <= numbersOfPages; i++) {
    pageArr.push(i);
  }
 }
//  console.log(pageArr);
 
  return (
    <>
      {
        pageArr.map((pageVal, idx) => {
          let css = pageVal == cPage ? "hover:bg-blue-500 border-2 py-2 px-3 rounded bg-blue-500 text-white" :
          "hover:bg-blue-500 border-2 py-2 px-3 rounded"
          return (
            <button key = {idx} className= {css} onClick={()=>setCPage(pageVal)}>{pageVal}</button>
          )
        })
      }

    </>

  )
}

export default Pagination;