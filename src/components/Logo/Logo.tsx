interface LogoProps{
  textColor: string
}

const Logo = ({ textColor }: LogoProps) => {
  return (
    <div className="font-playfair">
      <h1 className="font-bold text-4xl">
        <span className="text-green">e</span>
        <span className={`text-${textColor}`}>Tree</span>
      </h1>
    </div>
  );
};

export default Logo;
