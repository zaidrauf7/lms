import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { getItem } = useLocalStorage();
  const user = getItem("cookieFallback");
  return user ? (
    <Navigate to={"/"} />
  ) : (
    <Outlet />
  );
};

export default PublicRoutes;
