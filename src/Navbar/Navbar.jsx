import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from '../rtk/AuthSlice'
const Navbar = () => {
  const  {isAuth ,  LogginData} =useSelector(state=>state.AuthSlice)
  const dispatch =useDispatch()

  console.log( "LogginData" , LogginData)
  return (
< div className='Navbar'>

<ul>
   
    <Link to="/">Home</Link>
        <Link to="/shop">shop</Link>

        
      {

        isAuth ? <div className='LogOut d-flex align-items-center'>

<button onClick={()=>dispatch(LogOut())}  className='MyBtn'>LogOut</button> 
<h2 style={{color:"#fff", fontSize:"20px" , marginLeft:"10px"}}> welcome {LogginData.name}</h2>
        </div>:   
<>
<Link to="./Register">Register</Link>
        <Link to="/login">Login</Link>
</>

      }
      
       

</ul>
</div>
  )
}

export default Navbar
