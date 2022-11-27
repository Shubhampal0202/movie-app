import React from 'react'
import { Link } from "react-router-dom";
function NabBar() {
  return (
    <nav className='bg-black p-3 mb-3 '>
      <Link to="/home">
        <h2 class="font-medium  text-3xl mr-4 text-white inline-block">IMDB</h2>
      </Link>
      <Link to="/login">
        <span className='font-medium  text-xl text-blue-500 hover:text-blue-400'>Login</span>
      </Link>
    </nav>
  )
}

export default NabBar;