interface BadgeProps {
  description: string;
  bgColor: string;
  textColor: string;
}

const Badge = ({ description, bgColor, textColor }: BadgeProps) => {
  return (
    <div className={`bg-${bgColor}`}>
        <p className={`text-${textColor}`}>{description}</p>
    </div>
  );
};

export default Badge;
