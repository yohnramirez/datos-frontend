import { HiPlus } from "react-icons/hi";

interface ButtonFloatProps {
  handleClick: () => void;
}

const ButtonFloat = ({ handleClick }: ButtonFloatProps) => {
  return (
    <button
      onClick={handleClick}
      className="block fixed z-50 bottom-5 right-5 cursor-pointer rounded-full bg-green p-5 ease-in duration-150 hover:bg-greenTransparent"
    >
      <HiPlus size={40} color="white" />
    </button>
  );
};

export default ButtonFloat;
