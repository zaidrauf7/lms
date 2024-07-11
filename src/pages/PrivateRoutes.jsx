import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "./Layout";
import useLocalStorage from "@/hooks/useLocalStorage";

const PrivateRoutes = () => {
  const { getItem } = useLocalStorage();

  const user = getItem("cookieFallback");
  // const user = 44
  return user.a_session_666191a00026fbe3a2bc ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default PrivateRoutes;
