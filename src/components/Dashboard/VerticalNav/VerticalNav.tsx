import Logo from "../../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import { CiBoxList } from "react-icons/ci";
import { AiOutlineBarChart, AiOutlineSearch } from "react-icons/ai";

const VerticalNav = () => {
  return (
    <nav className="h-screen w-52 fixed shadow-lg">
      <div className="flex justify-center py-8">
        <Logo textColor="black" />
      </div>
      <div className="py-20">
        <ul className="flex flex-col gap-5">
          <NavLink
            text="Buscar"
            url="/buscar"
            children={<AiOutlineSearch fontSize={20} />}
          />
          <NavLink
            text="Mi Lista"
            url="/dashboard"
            children={<CiBoxList fontSize={20} />}
          />
          <NavLink
            text="Analiticas"
            url="/analitica"
            children={<AiOutlineBarChart fontSize={20} />}
          />
        </ul>
      </div>
    </nav>
  );
};

export default VerticalNav;
