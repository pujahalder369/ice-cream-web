import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        return <Navigate to={'/login'} replace />
    };

    return <Outlet />
}

export default AuthGuard;
