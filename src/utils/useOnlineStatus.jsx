import React from 'react'
import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
    let [onlinestatus, setOnlineStatus] = useState(true)
    useEffect(() => {

        window.addEventListener("online", () => {
            setOnlineStatus(true) 
        })

        window.addEventListener('offline', () => {
            setOnlineStatus(false) 
        })
    }, [])

    return onlinestatus;
}

export default useOnlineStatus