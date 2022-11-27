import React,{useState} from 'react'
import {Link} from "react-router-dom";
function InputBox(props) {
    const [searchText, setSearchText] = useState("");
    const [pageCount, setPageCount] = useState(4)
    const searchString = (e)=>{
        setSearchText(e.target.value);
      //  props.getSearchStrFromInputBox(searchText); not working properly
      props.getSearchStrFromInputBox(e.target.value);
    }
    const changePageCount = (e)=>{
      setPageCount(e.target.value);
    //  props.getSearchStrFromInputBox(searchText); not working properly
    props.getPageCountFromInputBox(e.target.value);
  }
  return (
    <div>
      <Link to="/new">
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>New</button>
      </Link>
        <input type="text"  className='border rounded py-1 px-1 mx-2 font-bold' value={searchText} onChange ={searchString}/>
        <input type="number" className="border rounded py-1 px-1 mx-2 font-bold" value={pageCount} onChange={changePageCount} />
    </div>
  )
}

export default InputBox