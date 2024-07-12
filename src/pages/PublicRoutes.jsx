import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { getItem } = useLocalStorage();
  const user = getItem("cookieFallback");
  return user.a_session_668e310c002b228c8df2 ? (
    <Navigate to={"/"} />
  ) : (
    <Outlet />
  );
};

export default PublicRoutes;
