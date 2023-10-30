import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
// import Home from './Home'

const RouteCompo = () => {
  return (
    <>
 
 <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/' element={<Dashboard/>}/>
       {/* <Route path='/home' element={<Home/>}/> */}
    </Routes>
    
 
  
    
    </>
  )
}

export default RouteCompo