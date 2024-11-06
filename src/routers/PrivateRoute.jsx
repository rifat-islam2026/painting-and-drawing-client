import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading/Loading";
import { AuthContext } from "../providers/AuthProvider";


function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        return <Loading/> ;
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
