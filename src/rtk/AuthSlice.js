import { createSlice } from "@reduxjs/toolkit";
var DataStore = JSON.parse(localStorage.getItem("MyLoginnData")) || null
console.log("DataStore" ,  JSON.stringify(DataStore))
 export const AuthSlice =createSlice({
 initialState:{
  isAuth: DataStore ? true : false,
LogginData:DataStore,
 },
 name:"auth",
 reducers:{
Loginn:(state , action)=>{
state.isAuth =true
state.LogginData=action.payload
localStorage.setItem("MyLoginnData" , JSON.stringify(action.payload))

},
LogOut:(state)=>{
    state.isAuth =false
    state.LogginData=null
    localStorage.removeItem("MyLoginnData")
    }

 }
})

export const {Loginn  , LogOut} =AuthSlice.actions
export default AuthSlice.reducer

