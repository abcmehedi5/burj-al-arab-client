import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userContext } from '../../App';


const PrivateRouter = ({children}) => {
    const [loggedin , setLoggedin] = useContext(userContext) ;
    const location = useLocation();
    return (
        <div>
            {
                loggedin.email  ? children : (<Navigate to="/login" replace state={{ from: location }}/>)
            }
        </div>
    );
};

export default PrivateRouter;