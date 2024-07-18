import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Navigate, Outlet } from 'react-router-dom'
import { Layout } from './Layout'

const PrivateRoutes = () => {
const { getItem } = useLocalStorage()
const user = getItem("user")
    return user ? (
   
      <Layout>
      <Outlet />
    </Layout>   

    
  ): (<Navigate to={"/login"} />)
}

export default PrivateRoutes
