import React, { useState, useEffect } from 'react';
import axios from 'axios';
import star from '../assets/star.png';

const BooksSection = ({ query }) => {
  const [booksList, setBooksList] = useState([]);
  const [flag, changeFlag] = useState(true)

  useEffect(() => {
    axios.get('https://reactnd-books-api.udacity.com/books', {
      headers: {
        'Authorization': 'whatever-you-want',
      },
    })
      .then((response) => {
        setBooksList(response.data.books);
        console.log(response.data.books);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  let filterData = booksList.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))

  useEffect(()=>{
    if(booksList.length == 0 || filterData.length >= 1){
      changeFlag(true)
    }
    else{
      changeFlag(false)
    }
  }, [filterData.length])

  return (
    <>
      <div>
        <div className='flex flex-wrap items-center justify-center mt-32 md:m-0'>
          {flag ? filterData
            .map((book) => (
              <div key={book.id} className='flex flex-col items-center justify-center relative md:text-1xl text-base bg-gray-100 hover:bg-gray-300 rounded w-[220px] h-[370px] md:h-[420px] md:w-[300px] md:p-11 p-8 m-10 shadow-lg cursor-pointer hover:scale-105 hover:border-4 hover:border-white hover:rounded-lg'>
                <img src={book.imageLinks.thumbnail} alt="book" className='block w-44 flex m-3' />
                <div className='flex flex-col'>
                  <div className='font-bold mt-2'>{book.title}</div>
                  <div className='flex items-center font-normal text-base'>
                    <span className='ml-1 opacity-80'>{book.averageRating ? book.averageRating : 3.5}</span>
                    <span className='ml-1'><img src={star} alt="ratings" className='w-4' /></span>
                    <span className='ml-3 opacity-80'>Free</span>
                  </div>
                </div>
              </div>
            ))
            : <p className='md:text-4xl text-2xl m-auto my-28 mb-64 font-serif text-red-500'>Search not found !</p>
          }
        </div>
      </div>
    </>
  );
}

export default BooksSection;
