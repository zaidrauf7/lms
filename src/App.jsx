import { useState } from 'react'
import './globals.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import { Layout } from './pages/Layout'

function App() {

  return (
    <>
<Routes>
{/* <Route exact path='/' element={<Home/>} /> */}
{/* <Route exact path='/login' element={<Login/>} /> */}
<Route exact path='/signup' element={<SignUp/>} />
<Route exact path='/' element={<Layout/>} />

</Routes>

    </>
  )
}

export default App
