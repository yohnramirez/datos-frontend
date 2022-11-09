import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex h-[85vh] text-white w-full">
      <div className="flex flex-col justify-center items-start pl-10 text-left bg-blueDark w-[30%] gap-8">
        <h2 className="text-5xl font-bold font-playfair leading-tight">
          Descubre el mundo de los árboles
        </h2>
        <Link
          to="/login"
          className="inline-block font-playfair font-bold bg-blue text-white p-3 rounded-md ease-in duration-150 hover:bg-green"
        >
          {" "}
          Empezar Mi Lista
        </Link>
      </div>
      <div className="w-[70%]">
        <img
          className="object-cover w-full h-[85vh]"
          src="./images/tree.jpeg"
          alt="Tree"
        />
      </div>
    </header>
  );
};

export default Header;
