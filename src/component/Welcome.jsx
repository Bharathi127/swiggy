import React,{useState} from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

const Welcome = () => {
    let [click,setClick]=useState(false)
    const clcikEvent=()=>{
        setClick(true)
    }
   
  return (
    <div>
        <h2 onClick={clcikEvent}>
         {click?"":"Welcome to Bharathi Restauranat"}
        </h2>
        <Link to="/login">
        <h2 style={{fontSize:"30px"}} onClick={clcikEvent}>
            {click?"":"Login here"}</h2>
        
        </Link> 

    </div>
  )
}

export default Welcome