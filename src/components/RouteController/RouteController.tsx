import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const RouteController = ({ children, redirectTo = "/login" }: any) => {
  const [user, setUser] = useState(false);

  // const init = () => {
  //   const auth = localStorage.getItem("auth");

  //   if (!auth) {
  //     setUser(false);
  //   } else {
  //     setUser(true);
  //   }
  // };

  // useEffect(init, []);

  // if (!user) {
  //   return <Navigate to={redirectTo} />;
  // }

  return children ? children : <Outlet />;
};

export default RouteController;
