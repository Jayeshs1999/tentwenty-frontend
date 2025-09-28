import React from "react";
import { Navigate, Outlet } from "react-router";
import { getUserInfo } from "../utils/getUserInfo";

const PrivateRoute = () => {
  const userInfo = getUserInfo();

  return userInfo?.email ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
