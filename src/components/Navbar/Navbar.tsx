import Logo from "../Logo/Logo";
import NavLink from "./NavLink/NavLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="font-playfair w-full h-24 flex justify-between items-center px-5 bg-white">
      <div className="flex justify-start items-center gap-20">
        <Logo textColor={"black"} />
        <div>
          <ul className="flex gap-10">
            <NavLink id={"contenidos"} text={"Contenidos"} />
            <NavLink id={"ciencia"} text={"Ciencia"} />
            <NavLink id={"noticias"} text={"Noticias"} />
          </ul>
        </div>
      </div>
      <div>
        <Link
          to="/login"
          className="font-bold bg-blue text-white p-2 rounded-md ease-in duration-150 hover:bg-green"
        >
          Mi eTree
        </Link>
        <Link
          to="/dashboard"
          className="font-bold bg-blue text-white p-2 rounded-md ease-in duration-150 hover:bg-green"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
