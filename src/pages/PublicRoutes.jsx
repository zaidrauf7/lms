import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
const { getItem } = useLocalStorage()
const user = getItem("user")
    return user ? (
        (<Navigate to={"/"} />)

    

    
  ):<Outlet/> 
}

export default PublicRoute