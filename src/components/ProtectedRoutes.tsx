import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentUser } from "../store/state.selector"

export const ProtectedRoutes = () => {
    const user = useSelector(selectCurrentUser);
    const location = useLocation()

    return (user ? <Outlet/> : <Navigate to="/auth" replace state={{from: location}}/>)
}