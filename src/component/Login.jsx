import React from 'react'
import { useState } from 'react'
import Body from './Body';
import Home from './Home';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ changeData }) => {
   let navigate=useNavigate()

  const [name, setName] = useState('');
  const [nameerr, setNameerr] = useState();
  const [email, setEmail] = useState('');
  const [emailerr, setEmailerr] = useState();
  const [number, setNumber] = useState('');
  const [numbererr, setNumbererr] = useState();
  const [password, setPassword] = useState('')
  const [passworderr, setPassworderr] = useState()
  const isName = (name) => {
    if (name !== "" && name !== null)
      return (
        setNameerr(''),
        setName(''),
        true
      )
    else
      return (
        setNameerr("Please enter name correctly"),
        false
      )
  }

  const isEmail = (email) => {
    let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (reg.test(email))
      return (
        setEmailerr(''),
        setEmail(''),
        true)
    else
      return (
        setEmailerr("Please enter valid emailid"),
        false)
  }

  const isNumber = (number) => {
    if (number !== "" && number.length === 10) {
      return (
        setNumbererr(""),
        setNumber(''),
        true
      )
    }
    else
      return (
        setNumbererr("Please Enter Number correctly"),
        false
      )
  }
  const isPassword = (password) => {
    let pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (password !== "")
      return (
        setPassworderr(''),
        setPassword(''),
        true)

    else
      return (
        setPassworderr("Please Enter Password correctly"),
        false)
  }

  const validateData = (e) => {
    e.preventDefault()
    let namevalid = isName(name)
    let emailValid = isEmail(email)
    let numbervalid = isNumber(number)
    let passwordvalid = isPassword(password)
    console.log(namevalid)
    console.log(emailValid)
    console.log(numbervalid)
    console.log(passwordvalid)
    if (namevalid && emailValid && numbervalid && passwordvalid) {

      changeData(true)
      sessionStorage.setItem("Name",name)
      sessionStorage.setItem("Email",email)
      sessionStorage.setItem("Number",number)
      sessionStorage.setItem("Password",password)
       navigate('/home')
    
    }
    else
      changeData(false)
    }

  return (
    <div className='Login'>

      {/* <h2 className='heading-data'>Welcome to the most famous Restaurant</h2> */}
      <div className='login-container'>
        
        <form className='Login-data' onSubmit={validateData}>
          <h2>Login Form</h2>
          <label htmlFor='Name' >Name: </label>
          <input type="text" value={name} onChange={(e) => { return (setName(e.target.value), setNameerr('')) }} />
          <span style={{ color: "red" }}>{nameerr}</span>
          <label htmlFor='Name'>EmailId: </label>
          <input type="text" value={email} onChange={(e) => { return (setEmail(e.target.value), setEmailerr('')) }} />
          <span style={{ color: "red" }}>{emailerr}</span>
          <label htmlFor='Name'>MobileNo: </label>
          <input type="number" value={number} onChange={(e) => { return (setNumber(e.target.value), setNumbererr('')) }} />
          <span style={{ color: "red" }}>{numbererr}</span>
          <label htmlFor='Name'>Password: </label>
          <input type="password" value={password} onChange={(e) => { return (setPassword(e.target.value), setPassworderr('')) }} />
          <span style={{ color: "red" }}>{passworderr}</span>
          <button>Submit</button>
        </form>

      </div>


    </div>
  )
}

export default Login