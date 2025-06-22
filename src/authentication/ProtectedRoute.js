import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated}) => {

    return isAuthenticated ? <Outlet /> : <Navigate to="/measurements" replace />;
};

export default ProtectedRoute;