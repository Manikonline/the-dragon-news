import { Children, useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";


const PrivateRoute = ({children}) => {

    const {user, loading}=useContext(AuthContext)

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;

/**
 * check user is logged in or not 
 * if user is logged in, then allow them to visit the route
 * else redirect the user to the login page
 *  setUp the Private route
 * handle loading
 * 
 **/ 
