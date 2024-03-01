import React, { useEffect, useState } from 'react'
import "./Home.css"
import ProductCard from '../ProductCard/ProductCard'
import  Pagination  from '../Pagination/Pagination'
import {useParams } from 'react-router-dom'

const products_par_page =8


const Home = () => {

const [pro  ,setPro] =useState([])
const [numofPage , setNumberPages]=useState(undefined)
let {page} =useParams()
console.log("Params" ,   page)

if(!page || page == 0) page=1

useEffect(()=>{
async function FetchData (){
  const response = await fetch(`http://localhost:8000/products?_page=${page}&_per_page=${products_par_page}`)  
  const data  =await response.json();
  setPro(data.data)
  setNumberPages(Math.ceil( 31 / products_par_page))
  }

  FetchData();
},[page])
  


// console.log("pro" , pro)
// console.log("numofPAges"  ,numofPage)



  return (
    <div>


<div className="container">

<div className="row">
  {
    pro.map(item=>(
      <div className='col-lg-3 col-nd-6 col-sm-12' key={item.id}>
      <ProductCard product={item}/>
      </div>
    ))
   }
  </div>


<Pagination numofPage={numofPage}  page={page}/>
  </div>




    </div>
  )
}
// _gte  اكبر من او يساوي 
// _gt  أكبر من 

// _lte أصغر من او يساوي 
//  _lt أصغر من 
// 

// http://localhost:3004/products?q=Iphone&category=smartphones&price_gte=400&price_lte=700

export default Home
