import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search-logo.png';
import '../App.css';

function Navbar({ setSearch }) {
    const [state, setState] = useState("");
    const [display, changeDisplay] = useState(true);

    const handleChange = (e) => {
        setState(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setSearch(state);
        }
    };

    return (
        <div className='md:flex items-center justify-between h-16 p-1 pt-1 mb-4 m-8'>
            <Link to="/" onClick={() => changeDisplay(true)}>
                <div className='flex max-w-fit md:items-center m-auto'>
                    <img src={logo} alt="kalvium" className='w-40 md:w-52' />
                    <span className='md:text-4xl text-2xl ml-2 font-semibold text-gray-500'>Books</span>
                </div>
            </Link>

            {display ?
                <div className='flex justify-center md:m-28 m-8'>
                    <input
                        type="text"
                        value={state}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                        placeholder='Search your books'
                        className='w-64 md:w-96 pl-2 h-10 text-normal rounded border-2 border-black border-opacity-50 shadow-lg'
                    />
                    <img
                        src={searchIcon}
                        alt="search-icon"
                        onClick={() => setSearch(state)}
                        className='md:w-10 w-10  cursor-pointer bg-gray-300 border-2 p-1.5'
                    />
                </div>
                : null
            }

            {display ?
               <div className='m-5 flex justify-center'>
               <Link to="/Registeration" onClick={() => changeDisplay(false)}>
                   <button className='bg-red-500 p-2 px-4 mx-5 text-white rounded hover:scale-105 font-medium cursor-pointer hover:shadow-xl'>Register</button>
               </Link>
           </div>
           : null
           }
         
        </div>
    );
}

export default Navbar;
