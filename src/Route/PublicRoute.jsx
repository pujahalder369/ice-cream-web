import React from 'react'
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';

const PublicRoute = [
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/sign-up",
        element: <SignUp/>
    }
];

export default PublicRoute
