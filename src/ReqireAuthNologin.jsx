import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ReqireAuthNologin = ({children}) => {
    const  {isAuth} =useSelector(state=>state.AuthSlice)
    console.log(isAuth , "isAuth")
    if(isAuth) return <Navigate to ="/" />
  return (
   <Fragment>
{children}
   </Fragment>
  )
}

export default ReqireAuthNologin
