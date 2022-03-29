import React from "react";
import { Navigate, Outlet } from 'react-router-dom'
import { NewGame } from "../components/NewGame";
import { useLocalStorage } from '../hooks/useLocalStorage';

export const OverView = () => {
    const userName = useLocalStorage('foosUser')[0];


    return (
        <>
            {!userName && <Navigate to='/login' />}
            <h1>Overview</h1>
            <NewGame />
            <Outlet />
        </>
    )
}
