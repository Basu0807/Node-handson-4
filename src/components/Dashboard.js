import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate=useNavigate()
const token =localStorage.getItem("token")
const [user,setuser]=useState([])
// console.log(user);
  useEffect(()=>{
if(token){
  axios.get('https://node-handson-4-vpv6.onrender.com/user/home',{headers:{
    "authorization":`Bearer ${token}`
  }}).then((res)=>setuser(res.data))
  .catch((err)=>console.log(err))
}
else{
  navigate('/login')
}
  },[token,navigate])


 const HandleClick=()=>{
localStorage.removeItem('token')
alert('You will be logged out')
navigate('/')
  }
  return (
    <>
    <div className='dashboard'>
    <h1 >{user}</h1>
    <button onClick={HandleClick} style={{width:50,backgroundColor:'black',color:'white'}}>Logout</button>
    </div>
    <div className='website'></div>
    
    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUKtad2fPmuW5OSYybHCN6oN7OhEEV-dkWdO7-e0UMD9QmXvVeFJTXyLmgmpez32ANMc&usqp=CAU' alt='website'/> */}
    
    </>
  )
}

export default Dashboard