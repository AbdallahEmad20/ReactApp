import React, { useEffect , useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
const Shop = () => {


  const [mypro  ,setmyPro] =useState([])
const [Quires  , setQuires] =useState("")
const [categories, setCategories] = useState([]);
const [filterValues , setFilterValues] =useState({
  q: "",
  category: "",
  price_gte: "",
  price_lte: "",
})


  
  useEffect(()=>{
 
  async function FetchData (){
  const response = await fetch("http://localhost:8000/products?" + Quires)
  const data  =await response.json();
  setmyPro(data)
  
  }



  

  FetchData()
},[Quires])

console.log("mypro" , mypro)




  
  
  // get All Products
  
  

  
  // 
  
  
  
    useEffect(() => {
      async function getCategories() {
        const res = await fetch("http://localhost:8000/categories");
        const data = await res.json();
        setCategories(data);
      }
  
      getCategories();
    }, []);
  
  console.log("cato" , categories)
  console.log("filterValues" , filterValues)
  
  
  // changeInputValue
  
  function changeInputValue (e){
  
  setFilterValues({...filterValues ,  [e.target.name] : e.target.value})
  }
  // 
  
  
      //
      
      
  function HandleFilter (e){
   e.preventDefault()
    const myvalues = []
    for( let key in filterValues){
      if (filterValues[key]) {
        myvalues.push(`${key}=${filterValues[key]}`);
      } 
    }
  
    setQuires(myvalues.join('&'))
  
  
  }
  
  



  return (
    <div>
     
     <div className="container">


{/* form  */}

{/*  onSubmit={handleSubmit} */}

<form className="mb-3 d-flex gap-3"   onSubmit={HandleFilter}>

      <input
        className="shop-filter__input  searchaia "
        type="text"
        name="q"
        placeholder="Search..."
        value={filterValues.q}
        onChange={changeInputValue}
      />
      <select
        className="shop-filter__input "
        value={filterValues.category}
        name="category"
        onChange={changeInputValue}
      >
        <option value="">Choose a category</option>
        {categories.map((category) => {
          return (
            <option key={`shop-filter-category-${category}`}>{category}</option>
          );
        })}
      </select>
      <input
        className="shop-filter__input "
        type="number"
        name="price_lte"
        placeholder="Min price"
        value={filterValues.price_lte}
        onChange={changeInputValue}

      />

      <input
        className="shop-filter__input "
        type="number"
        name="price_gte"
        placeholder="Max price"
        value={filterValues.price_gte}
        onChange={changeInputValue}
      />

      <input className="shop-filter__input btn btn-primary" type="submit" />
      <input
        className="shop-filter__input btn btn-primary"
        type="reset"
        onClick={() => {
          setFilterValues({
            q: "",
            category: "",
            price_gte: "",
            price_lte: "",
          })
          setQuires("");
        }}
      />
    </form>



{/*  */}



  <div className="row">
  {
    mypro.map(item=>(
      <div className='col-lg-3 col-nd-6 col-sm-12' key={item.id}>
      <ProductCard product={item}/>
      </div>
    ))
   }
  </div>
</div>


    </div>
  )
}

export default Shop
