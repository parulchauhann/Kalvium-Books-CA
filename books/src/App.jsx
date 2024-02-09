import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import BooksSection from './Components/BooksSection';
import Registeration from './Components/Registeration';
import Footer from './Components/Footer';

function App() {
  const [search, setSearch] = useState("")

  return (
    <>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<BooksSection query={search} />}></Route>
        <Route path='/Registeration' element={<Registeration />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App