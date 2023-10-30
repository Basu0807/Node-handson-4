import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Home from './Home'


const Signup = () => {
 
  const[data,setData]=useState({
    name:"",
    phone:"",
    email:"",
    password:""
})

const navigate = useNavigate()
const InputHandler=(e)=>{
setData((pre)=>{
return{...pre,[e.target.name]:e.target.value}
})
}
//  console.log(data);

const SubmitHandler=(event)=>{
event.preventDefault()
axios.post('http://localhost:4000/user/register',data)
.then((res)=>{
alert(res.data.msg) 
if(res.data.msg === "You have successfully registered"){
  localStorage.setItem("token",res.data.token)
  navigate('/')
}
else{
  navigate('/login')
}

})
.catch((err)=>console.log(err))

setData({
name:"",
phone:"",
email:"",
password:""
})

}



return (
<>

    <div className='mainContainer'>
  <img src='https://www.webibazaar.com/blog/wp-content/uploads/2023/03/10-Best-Shopping-Website-Templates-for-Boosting-Your-E-commerce--scaled.jpg'alt='welcome to the website' />
  
  <div className='formContainer'>

  
    
    <Home/>
   
<form onSubmit={SubmitHandler}>
<h1>Be Our New Registered Member</h1>
            <label htmlFor="name">Name : </label>
            <input id="name" type="text" name="name" value={data.name}  onChange={InputHandler} placeholder="ENTER NAME" required autoComplete='new-name' /><br></br>
            <label htmlFor="number">Phone number : </label>
            <input id='number'  type="text" name="phone" value={data.phone}  onChange={InputHandler} placeholder="1234567890"  required autoComplete='new-name'  /><br></br>

            <label htmlFor="email">Email Id : </label>
            <input id="email" type="email" name="email" value={data.email}  onChange={InputHandler} placeholder="abc@gmail.com" required autoComplete='new-name' /><br></br>
            <label htmlFor="password">Password : </label>
            <input id="password" type="password" name="password" value={data.password} onChange={InputHandler} required autoComplete='new-name' /><br></br>
            <button className="btn" type='submit'>Submit</button>
            
            </form>
            </div>
    </div>
           

</>


)
  
}

export default Signup