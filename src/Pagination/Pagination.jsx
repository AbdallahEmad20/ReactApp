import React, { useEffect } from 'react'
import "./Pagination.css"
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const Pagination = ({numofPage , page }) => {
const navigate =useNavigate()

useEffect(()=>{
  if(page == undefined ) return ;
if(page > numofPage) navigate("/"+numofPage)
else if(page < 1 ) navigate("/"+1)
},[ numofPage , navigate , page])
console.log("numoffPage" , numofPage)
  return (
    <div>
      
  <div className="BtnPAnigation">
  {

Array.from({length:numofPage} ,(_ , i)=>i+1).map((pageia , index )=>(
 <Link to={`/${pageia}`}>
    <Button    className={`mybtn ${page == pageia ? "BackGround" : "" }`} key={index}>{pageia}</Button> 

 </Link>
 
  ))



      }
  </div>
    </div>
  )
}

export default Pagination
