import React,{useState} from 'react'
import Home from './Home'
import Body from './Body'

const NavBar = ({state}) => {
   
  return (
    <div>
    
        {state?<Body/>:""}
    </div>
  )
}

export default NavBar