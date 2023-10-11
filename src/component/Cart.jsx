import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Items from './Items'
import { EmptyCart,removeItem } from '../utils/CartSlice'
const Cart = () => {
  const cartData = useSelector((store) => store.cart.Items)
  //console.log(cartData)

  const dispatch = useDispatch()
  const clearCartData = () => {
    dispatch(EmptyCart())
  }
  const removeItemFromCart=(id)=>{
    
    dispatch(removeItem(id));
    setTimeout(()=>{
      alert("Your item has removed sucessfully")  
    },1000)
    
   
  }
  return (
    <div className='text-center'>
      <h1 className=' m-3 p-4 font-bold text-2xl'>Cart</h1>
      <button className='bg-black text-white p-2 rounded-lg' onClick={clearCartData}>Clear cart🛒</button>
      <div>
        {cartData.length <= 0 && " your cart is empty🍕🍕"}

        <div>
          {cartData.map((ele,index) => {
            return (
              <div className='w=6/12 flex m-6 bg-gray-200'>
                <img src={ele.url} className='w-80 mx-7 p-3' />
                <div className='relative'>
                  <div className='font-bold text-justify text-lg mt-3'>
                    <h2>Name: {ele.name}</h2>
                    <h2>Category: {ele.category}</h2>
                    <h2>Price: {ele.price}</h2>
                  </div>
                  <div>
                    <button className='bg-red-500 p-1 text-white rounded-md mt-9 absolute bottom-0 left-0 mb-16' onClick={()=>removeItemFromCart(ele.id)}>Remove</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>


      </div>
    </div>
  )
}

export default Cart