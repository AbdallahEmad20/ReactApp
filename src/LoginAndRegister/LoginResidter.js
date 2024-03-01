import React from 'react'
import { useDispatch } from 'react-redux'
import { openModel } from '../Model/ModelSlice'

const LoginResidter = () => {
    const dispatch = useDispatch()
  return (
    <div>

<div className='login-register'>
      <button className='btnnn' onClick={()=>dispatch(openModel('login'))} >Login</button>
      <div>OR</div>
      <button className='btnnn' onClick={()=>dispatch(openModel('register'))} >Register</button>
    </div>

    </div>
  )
}

export default LoginResidter
