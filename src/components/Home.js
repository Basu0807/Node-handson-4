import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='linkcontainer'>
    <div><Link to='/login' className='links'>Login</Link></div>
   <div><Link to='/signup' className='links'>Signup</Link></div>
    </div>
    
 
    </>
  )
}

export default Home