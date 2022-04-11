import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const RequireAuth = () => {
    const { user } = useContext(UserContext);

    return (
        user?.username
            ? <Outlet />
            : <Navigate to='/' replace />
    );
}

export default RequireAuth;