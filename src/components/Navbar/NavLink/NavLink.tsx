const NavLink = ({ id, text }: any) => {
  return (
    <li className="p-2 rounded-md ease-in duration-150 hover:bg-greenTransparent cursor-pointer">
      <a href={`#${id}`}>{text}</a>
    </li>
  );
};

export default NavLink;
