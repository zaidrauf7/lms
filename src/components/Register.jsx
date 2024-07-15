import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { Input } from './ui/input';


const Register = () => {
  return (
    <div className='w-full'>
        <div className='flex justify-between'>
            <div className='flex gap-6'>
                <Input placeholder= "Filter"/>
                <Input placeholder= "Filter"/>
                <Input placeholder= "Filter"/>
            </div>
            <Link to="/registeration/registeruser">
            
            <Button >Register</Button>
            </Link>
        </div>
        <div>
        <h1 className="text-xl font-semibold my-8">Students</h1>
            
        </div>
    </div>
  )
}

export default Register