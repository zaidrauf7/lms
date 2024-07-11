import { useState } from 'react'
import './globals.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import { Layout } from './pages/Layout'
import { Toaster } from './components/ui/toaster'
import Login from './pages/Login'
import PrivateRoutes from './pages/PrivateRoutes'
import Homes from './components/Homes'

function App() {

  return (
    <>
<Routes>

<Route element={<PrivateRoutes/>}>
<Route path='/' element={<Homes/>}/>

</Route>

<Route exact path='/signup' element={<SignUp/>} />
<Route exact path='/login' element={<Login/>} />

</Routes>
<Toaster />

    </>
  )
}

export default App
