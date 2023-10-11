import React from 'react'

const Display = ({ area, cuisines, cost, rating }) => {
    return (
        <div>
            <div>
                <h2>Area: {area}</h2>
                <h2>Cuisines: {cuisines}</h2>
                <h2>Cost: {cost}</h2>
                <h2>Rating: {rating}⭐</h2>
            </div>
        </div>
    )
}

export default Display