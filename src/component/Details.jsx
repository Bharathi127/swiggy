import React ,{useState}from 'react'
import Display from './Display'
const Details = ({id,name,area, cuisines, cost, rating ,arrow,setShowIndexProps}) => {
     const [arrows, setArrows] = useState(false)
     const clickEvent = (i) => {
      return(
        setShowIndexProps(i)
       )
      
     }
  return (
    <div >
            <div className='mb-4 w-6/12 bg-gray-200 mx-80 my-6 p-4 shadow-xl cursor-pointer rounded-md text-lg' >
              <div className='flex justify-between mb-5 font-bold text-xl' key={id}>
                <h2 >{name}</h2>
                <h2 onClick={()=>{clickEvent(id)}}>⬇️</h2>
              </div>
               
              {arrow &&

                <Display area={area} cuisines={cuisines} cost={cost} rating={rating} />
              }
            </div>

         
        
     


    </div>
  )
}

export default Details