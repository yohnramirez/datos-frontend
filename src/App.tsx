import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Lista from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RouteController from "./components/RouteController/RouteController";

const App = ({user}:any) => {
  // const [user, setUser] = useState(false);

  // const init = () => {
  //   const auth = localStorage.getItem("auth");

  //   if (auth) {
  //     setUser(true);
  //   } else {
  //     setUser(false);
  //   }

  //   console.log(auth)
  // };

  // useEffect(init, [user]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RouteController user={user}/>}>
          <Route path="/dashboard" element={<Lista/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
