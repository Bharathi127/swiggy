import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const RecipiDetails = ({ value }) => {
    const { id } = useParams()
    const [params, setParams] = useState('')

    //console.log(id)
    useEffect(() => {
        value.map((ele) => {
            if (ele.id === id) {
                setParams(ele)
            }
        })

    }, [id])
    return (

        <div className='text-center flex m-5'>
            <img src={params.url} alt="" className='w-3/12 rounded-md shadow-lg' />
            <div className='m-5 text-justify text-xl font-bold'>
                <h2>Category: {params.category}</h2>
                <h2>Name: {params.name}</h2>
                <h2>Price: {params.prize} rs</h2>
                <h2>{}</h2>
                <h2 className='text-sm'>Description:  "In a large bowl, mix the warm water and yeast. Let it sit for about 5 minutes until the yeast is activated and starts to foam.
                    Add the flour, olive oil, salt, and sugar to the bowl. Mix until the dough comes together.
                    Transfer the dough to a floured surface and knead for about 5 minutes until it becomes smooth and elastic.
                    Place the dough in a greased bowl, cover it with a clean kitchen towel, and let it rise in a warm place for about 1 hour or until it doubles in size.
                    Preheat your oven to the highest temperature setting (usually around 500°F or 260°C).
                    Punch down the dough to release any air bubbles and transfer it to a floured surface.
                    Divide the dough into desired portions and shape them into rounds or rectangles.
                    Place the shaped dough on a greased baking sheet or pizza stone.
                    Add your favorite toppings such as tomato sauce, cheese, vegetables, and meats.
                    Bake the pizzas in the preheated oven for about 10-15 minutes or until the crust is golden brown and the cheese is melted and bubbly.
                    Remove the pizzas from the oven and let them cool for a few minutes before slicing and serving."</h2>
            </div>

        </div>


    )
}

