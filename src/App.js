import React, { useState, useEffect,useContext} from 'react'
import Home from './component/Home'
import './App.css'
import Body from './component/Body'
import Footer from './component/Footer'
import Login from './component/Login'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import NavBar from './component/NavBar'
import About from './component/About'
import Contact from './component/Contact'
import Cart from './component/Cart'
import useOnlineStatus from './utils/useOnlineStatus'
import Welcome from './component/Welcome'
import { RecipiDetails } from './component/RecipiDetails'
import UserContext from './utils/UserContext'
const App = () => {
    sessionStorage.setItem("dealercode", "12345")
    let [value, setValue] = useState([])
    let [state, setState] = useState(false)
    let [came, setCame] = useState('')
    let [some, setSome] = useState()

    let [listOfRestaurants, setlistOfRestaurants] = useState()
     let {LoggedInUser}=useContext(UserContext)
    const changeData = (data) => {
        if (data) {
            setState(true)
        }
        else
            setState(false)
    }
    const fetchdata = async () => {
        let res = await fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json")
        let response = await res.json();
        setValue(response.items)
        setlistOfRestaurants(response.items)
    

    }
    useEffect(() => {
        fetchdata()

    }, [])
    useEffect(()=>{
        setSome("Bharathi")
    })
    const status = useOnlineStatus()
    if (status === false) {
        return <h2 className='italic'>"Please check your internet connection, try again later....."</h2>
    }
    
    return (

        <div>
            <UserContext.Provider value={{LoggedInUser:some}}>
            <BrowserRouter>
               
                {/* <center style={{ fontFamily: "sans-serif", fontSize: "30px", color: "ThreeDLightShadow" }}><Welcome /></center>
                <Routes>
                    <Route path='/login' element={<Login changeData={changeData} />}></Route>

                </Routes>
                {state ? */}
                <Home value={value} setValue={setValue} setlistOfRestaurants={setlistOfRestaurants} />
                  {/* : ""}  */}
                {/* {state ? */}
                <Routes>

                    <Route path='/home' element={<Body value={value} setValue={setValue} setlistOfRestaurants={setlistOfRestaurants} listOfRestaurants={listOfRestaurants} />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>

                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/details/:id' element={<RecipiDetails value={value} />}></Route>
                </Routes>
              {/* : ""}  */}
            </BrowserRouter>
            </UserContext.Provider>
        </div>
    )
}
export default App



