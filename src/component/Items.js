import React from 'react'
import { Link,} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/CartSlice'
const Items = ({ id, category, name, url, price }) => {
    const dispatch=useDispatch()
   const addItemsEvent=({id, category, name, url, price})=>{
      dispatch(addItem({id, category, name, url, price}))
    //   alert("Item Added Successfully to cart")
    //   console.log( dispatch(addItem()))
   }
    return (
       
        <div className='items rounded-sm hover:bg-blue-300 '>
             <Link to={`/details/${id}`}  key={id}>
            <h2 className='img'>
                <img src={url} alt="Try again" />
            </h2>
            <div className='align font-bold text-lg jutify-content'>
            <h2>Title: {category}</h2>
            <h2>Name: {name}
            </h2>
            <h2>Price: Rs.{price}</h2>
            </div>
            </Link>
            <div className='flex m-5 mb-1 justify-between '>
           <span>
           <button className='bg-blue-700 p-1 w-50 text-white rounded-md ml-8' onClick={()=>addItemsEvent({id, category, name, url, price})}>Add to cart</button>
           </span>
           <span>
           {/* <button className='bg-red-500 p-1 text-white rounded-md'>Remove</button> */}
           </span>
           </div>
        </div>
    
       
    )
}

export default Items