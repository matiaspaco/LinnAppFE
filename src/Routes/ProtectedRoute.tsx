import React from 'react'
import { Navigate, useLocation } from 'react-router'
import { useAuth } from '../Context/UseAuth';

type Props = {children: React.ReactNode}
//implementation to avoid navigate without login or register
const ProtectedRoute = ({children}: Props) => {
    const location = useLocation();// it's required always the location to determine from where are you going to be redirected
    const {isLoggedIn} = useAuth();//Consume the context provided by the create context 
    return isLoggedIn() ? (<>{children}</>)
         : (<Navigate to="/login" state={{from: location}} replace/>)
}

export default ProtectedRoute