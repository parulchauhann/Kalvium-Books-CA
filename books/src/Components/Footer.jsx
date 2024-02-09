import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black p-12 px-6 flex justify-between text-white font-semibold text-xs md:text-lg'>
      <div className='mx-3'>Designed & Developed By: <a href='https://github.com/parulchauhann' className='text-red-500 font-normal underline'>Parul Chauhan</a></div>
      <div className='mx-3'>API support: <a href="https://reactnd-books-api.udacity.com/books" className='underline text-blue-700 font-normal'>here</a></div>
    </div>
  )
}

export default Footer