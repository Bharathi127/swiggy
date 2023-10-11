import React, { useState, useEffect } from 'react'
import Items from './Items'
import ShimmerData from './ShimmerData'
const Body = ({value,setValue,listOfRestaurants,setlistOfRestaurants}) => {
 
   let [code, setCode] = useState()


    if (value.length === 0) {
        return <ShimmerData />
    }

    const dataHandler = () => {
        const filterddata = value.filter(
            (ele) => ele.prize > 400
        )
        console.log(value)
        setlistOfRestaurants(filterddata)
        setCode(sessionStorage.getItem("dealercode", "12345"))
        sessionStorage.removeItem("dealercode", "12345")

    }


    return (
        <>
            {/* <h2>{code}</h2> */}

            <button onClick={dataHandler} className='m-5 bg-orange-500 p-1 rounded-sm'>
                Filter data</button>
            <div className='sample'>


                {
                    listOfRestaurants.map((ele, i) => {
                        return (
                            <Items key={i}  id={ele.id} category={ele.category} name={ele.name} url={ele.url} price={ele.prize} />
                        )
                    })
                }

                


            </div>
        </>
    )
}

export default Body