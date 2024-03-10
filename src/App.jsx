import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'

const App = () => {
  return (
    <>
      <div className='flex w-full h-screen'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div >
    </>
  )
}

export default App