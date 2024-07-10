import React from 'react'

const Login = () => {

    const onSubmit = async (data) => {
        try {
            const result = await account.createEmailPasswordSession(
                data?.email,
                data?.password
              );
        } catch (error) {
            
        }
    }
  return (
    <div>Login</div>
  )
}

export default Login