import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

const PrivateRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);

  if (!authContext.currentUser) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
