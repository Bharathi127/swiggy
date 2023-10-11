import React, { useState, useEffect,useContext } from 'react'
import Body from './Body'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Home = ({ value, setValue, setlistOfRestaurants }) => {
  let [searchData, setsearchData] = useState('')
  console.log(searchData)
  const searchFilterData = () => {
    // console.log(value)
    if(searchData!==''){
    const datavalid = value.filter(
      (item) => {
        return (item.name.toLowerCase().includes(searchData.toLowerCase()))
      }

    )
    setlistOfRestaurants(datavalid)
    setsearchData('')
  }
else{
   alert("Please enter data correctly")
}}
   const status=useOnlineStatus()
  const {LoggedInUser}=useContext(UserContext)
  //console.log(LoggedInUser)

    const cartItems=useSelector((store)=>store.cart.Items)
   
  return (
    <div className='flex bg-green-300 text-xl shadow-xl'>
      <div className='logo'>
        <img src={"https://clipground.com/images/food-company-logo.png"} alt="" />
      </div>
      <div className='input-box'>
        <h1 className='resdata'>
          <input type="text" size={30} placeholder='search here...' value={searchData} onChange={(e) => setsearchData(e.target.value)} />
        </h1>
        <button className='search-btn' onClick={searchFilterData}>Search</button>
      </div>
      <div className='nav'>
        
        <Link to={'/home'} >
          <div className='homepage'>
            <h2>Home</h2>
          </div>
        </Link>
        <Link to={'/about'} >
        <div className='homepage'>
          <h2>Top Restaurants</h2>
        </div>
        </Link>
        <Link to={'/contact'} >
        <div className='homepage'>
          <h2>Contact Us</h2>
        </div>
        </Link>
        {/* <Link to={'/login'} >
        <div className='homepage'>
          <h2>Login</h2>
        </div>
        </Link> */}
          <Link to={'/cart'} >
        <div className='homepage'>
          <h2>Cart🛒({cartItems.length} items)</h2>
        </div>
        </Link>
        <div>
         
          <h2 className='text-lg font-bold my-3'>{LoggedInUser}</h2>
        </div>
      </div>




    </div>
  )
}

export default Home