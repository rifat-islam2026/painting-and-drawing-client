import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        return;
    }
    if (user) {
        return children;
    }
  return (
    <Navigate to="/login">
      
    </Navigate>
  )
}

export default PrivateRoute
