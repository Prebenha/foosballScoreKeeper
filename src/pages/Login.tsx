import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [userName, setUserName] = useState('');
    let navigate = useNavigate();


    const submit = () => {
        localStorage.setItem("foosUser", userName)
        navigate('/');
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={submit}>
                <input placeholder="Enter full name" type="text" onChange={(e) => { setUserName(e.target.value) }} />
                <button type="submit" disabled={!userName.length}>Login</button>
            </form>
        </>
    )
}