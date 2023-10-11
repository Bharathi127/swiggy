import { createContext } from 'react'
import React from 'react'

const UserContext = createContext({
    "LoggedInUser":"Default User"
})
 

export default UserContext