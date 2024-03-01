import React, { useEffect, useState } from 'react'
import { ErrorMessage, Field, Formik , Form  } from 'formik';
import "./Login&Reg.css"
import loginSchema from "../Schema/Login"
import { useDispatch, useSelector } from 'react-redux';
import { Loginn } from '../rtk/AuthSlice';


  const Login = () => {  
    const  myAuthSlice =useSelector(state=>state.AuthSlice)
    const dispatch =useDispatch()
    console.log("myAuthSlice" , myAuthSlice)

    async function LoginHandeler (values){
  const response = await fetch(`http://localhost:8000/users?email=${values.email}&password=${values.password}`)
  const data  =await response.json();
    // const DataSearch = data.filter(mydata => mydata.password === values.password && mydata.email === values.email)

    if(data.length  > 0 ){
  dispatch(Loginn(data[0]))
    }
    else{
  console.log("A")
    }



}




// 



  return (
    <div>


    <div className="login-box">
    <h1>Login </h1>
    <Formik
       initialValues={{
         email: '',
         password:''
       }}
       validationSchema={loginSchema}
       onSubmit={LoginHandeler}
     >

    <Form action="">

 
    <label >Email</label>
    <Field type="email"  name='email'  placeholder="Email"/>
<span><ErrorMessage name='email'/></span>
    

    <label >Password</label>
    <Field type="password" name='password' placeholder="Password"/>
    <span><ErrorMessage name='password'/></span>

<button type='submit'>Login </button>
  </Form>
  </Formik>

  <p className="para-2">
    Not have an account? <a href="index.html">Signup  here</a>
   </p>
  </div>
  
    </div>
  )
}

export default Login
