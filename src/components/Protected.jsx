

import React from 'react'
import { Navigate } from 'react-router-dom'

// const Protected = ({isAuth, children}) => {

//   if(isAuth){
//     return children
//   }

//   return <Navigate to='/login'/>
// }

// export default Protected

const Protected = ({ isAuth, role, allowedRoles, children }) => {
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to={`/${role}/dashboard`} replace />; 
  }

  return children;
};


 export default Protected