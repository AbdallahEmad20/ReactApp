import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Login from './LoginAndRegister/Login'

const RequirAuthLoggin = ({children}) => {
    const  {isAuth} =useSelector(state=>state.AuthSlice)
    console.log(isAuth , "isAuth")
    if(!isAuth) return  <Login/>
  return (
   <Fragment>
    {children}
   </Fragment>
  )
}

export default RequirAuthLoggin
