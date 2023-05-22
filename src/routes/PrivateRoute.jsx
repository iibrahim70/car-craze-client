import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);  
  const location = useLocation(); 

  if(loading) {
    return <div className='container mt-[104px] mb-10 md:mt-[144px] md:mb-20 text-center'>loading...</div>
  }

  if(user){
    return children; 
  } 

  return <Navigate state={{ from: location }} to='/signup' replace></Navigate>
};

export default PrivateRoute;