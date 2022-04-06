import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();

    return (
        auth?.username
            ? <Outlet />
            : <Navigate to='/' replace />
    );
}

export default RequireAuth;