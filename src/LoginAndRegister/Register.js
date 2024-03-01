import React, { useEffect, useState } from 'react'
import "./Login&Reg.css"
import { ErrorMessage, Field, Formik , Form } from 'formik'
import RegisterSchema from '../Schema/Register'
import { useNavigate } from 'react-router-dom'
const Register = () => {
 const navigate =useNavigate()
async function ResrtAccountHandeler(values , {resetForm}){

await fetch("http://localhost:8000/users", {
  method: "POST",
  body: JSON.stringify(values),
  headers: {
    "Content-Type": "application/json",
  },
});

resetForm()
navigate("/login")
}

  return (

    <div>
      



      <div className="signup-box">
  <h1>Sign Up</h1>
  <Formik

initialValues={{
  name:"",
  email: "",
  password:"",
  conpassword:"",
}}
validationSchema={RegisterSchema}
onSubmit={ResrtAccountHandeler}

>
  <Form action="">
    <label >First Name</label>
    <Field type="text" name='name' placeholder="First Name"/>
<span><ErrorMessage name='name'/></span>

     
    {/* <label>Last Name</label>
    <Field type="text" name='name' placeholder="Last Name"/>
    <span><ErrorMessage name='name'/></span> */}

    <label >Email</label>
    <Field type="email"  name='email' placeholder="Email"/>
    <span><ErrorMessage name='email'/></span>

    <label >Password</label>
    <Field type="password" name='password' placeholder="Password"/>
<span><ErrorMessage name='password'/></span>
   
    <label > Confirm Password</label>
    <Field type="password" name='conpassword' placeholder="confirm Password"/>
<span><ErrorMessage name='conpassword'/></span>
<button type='submit' variant="primary">Register</button>
   </Form>
 </Formik>

 <p className="para-2">
  ALready have an account? <a href="login.html">Login here</a>
 </p>

 </div>








      
    </div>
  )
}

export default Register
