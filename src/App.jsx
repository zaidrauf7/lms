import './globals.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import { Toaster } from './components/ui/toaster'
import Login from './pages/Login'
import PrivateRoutes from './pages/PrivateRoutes'
import Homes from './components/Homes'
import PublicRoutes from './pages/PublicRoutes'
import Register from './components/Register'
import RegisterUser from './components/RegisterUser'
import EditStudentData from './components/EditStudentData'

function App() {

  return (
    <>
<Routes>
<Route element={<PrivateRoutes/>}>
<Route path='/' element={<Homes/>}/>
<Route path='/registeration' element={<Register/>}/>
<Route path='/registeration/registeruser' element={<RegisterUser/>}/>
<Route path='/editstudent/:id' element={<EditStudentData/>}/>

</Route>

<Route element={<PublicRoutes />} >
<Route exact path='/login' element={<Login/>} />

</Route>

</Routes>
<Toaster />

    </>
  )
}

export default App
