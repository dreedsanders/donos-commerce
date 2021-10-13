import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MyPage() {

    let user = useSelector((state) => state.userState.current_user)
    
    const handleClick = () => {
        console.log(user)

    }

    return (
        <div>
            <h1>{user[0].name}</h1>
            <h2>you have </h2>
            <Link to="/home" >Home</Link>
            <button onClick={handleClick}>here</button>
            
        </div>
    )
}
