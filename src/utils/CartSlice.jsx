import React from 'react'
import { createSlice,current} from '@reduxjs/toolkit'
import Items from '../component/Items'
const initialstate={
    Items:[]
}
const CartSlice = createSlice({
    name:"cart",
    initialState:initialstate,
    reducers:{
        addItem:(state,action)=>{
          state.Items.push(action.payload)
        },
        EmptyCart:(state,action)=>{
            state.Items.length=0
        },
        removeItem:(state,action)=>{
            console.log(current(state))
            const updateItems=state.Items.filter(item=>item.id!==action.payload)
            console.log(updateItems)
            return{
                ...state,
                Items:updateItems,
              
             }
         
   
        }
    }


})
export const {addItem,EmptyCart,removeItem}=CartSlice.actions
export default CartSlice.reducer