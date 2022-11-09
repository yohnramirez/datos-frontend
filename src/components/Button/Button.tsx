interface ButtonProps {
  value: any;
  bgColor: string;
  textColor: string;
  bgHover: string;
}

const Button = ({ value, bgColor, textColor, bgHover }: ButtonProps) => {
  return (
    <button
      className={`font-bold bg-${bgColor} text-${textColor} p-2 rounded-md ease-in duration-150 hover:bg-${bgHover}`}
    >
      {value}
    </button>
  );
};

export default Button;
