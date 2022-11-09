import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const RouteController = ({ children, redirectTo = "/login" }: any) => {
  const [user, setUser] = useState(false);

  const init = () => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      setUser(false);
    } else {
      if (JSON.parse(auth) === "yes") {
        setUser(true);
      } else {
        setUser(false);
      }
    }
};
    // if (!user) {
    // return <Navigate to={redirectTo} />;
    // }

  useEffect(init, [])
  
  return children ? children : <Outlet />;
};

export default RouteController;
