import { Routes, Route } from "react-router-dom";
import Lista from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Search from "./components/Search/Search";
import RouteController from "./components/RouteController/RouteController";
import Analityc from "./components/Analityc/Analityc";

const App = ({ user }: any) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/analitica" element={<Analityc />} />
        <Route element={<RouteController user={user} />}>
          <Route path="/dashboard" element={<Lista />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
