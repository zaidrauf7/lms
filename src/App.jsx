import './globals.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import Login from './pages/Login';
import PrivateRoutes from './pages/PrivateRoutes';
import Homes from './components/Homes';
import PublicRoutes from './pages/PublicRoutes';
import Register from './components/Register';
import RegisterUser from './components/RegisterUser';
import EditStudentData from './components/EditStudentData';
import Attendence from './components/Attendence';
import StudentDashboard from './components/StudentDashboard';
import { useContext } from 'react';
import { Context } from './Context/Context';
import StudentDetails from './components/StudentDetails';
function App() {
 const {userInfo , loader} = useContext(Context)
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes userInfo={userInfo} />}>
          <Route path='/' element={userInfo && userInfo.$id === "6698da7a0014f835a7b9" ? <Homes /> : <StudentDashboard />} />
          <Route path='/registeration' element={<Register />} />
          <Route path='/registeration/registeruser' element={<RegisterUser />} />
          <Route path='/editstudent/:id' element={<EditStudentData />} />
          <Route path='/attendence' element={<Attendence />} />
          <Route path='/studentdetails' element={<StudentDetails />} />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
export default App;









