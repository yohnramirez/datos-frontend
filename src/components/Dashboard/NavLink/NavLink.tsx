import { Link } from "react-router-dom";

interface NavLinkProps {
  url: string;
  children?: any;
  text: string;
}

const NavLink = ({ url, children, text }: NavLinkProps) => {
  return (
    <li className="p-2 rounded-md ease-in duration-150 hover:bg-greenTransparent cursor-pointer font-playfair font-light hover:font-bold text-lg">
      <Link to={url} className="flex justify-center items-center gap-2">
        <i>{children}</i>
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
