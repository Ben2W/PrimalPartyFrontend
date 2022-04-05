import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    console.log('auth:')
    console.log(auth?.username);

    return (
        auth?.username
            ? <Outlet />
            : <Navigate to='/' replace />
    );
}

export default RequireAuth;