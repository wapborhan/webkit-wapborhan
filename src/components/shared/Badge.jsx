const Badge = ({ title }) => {
  const updateBadge = title === "update";
  const newBadge = title === "new";

  return (
    <div
      className={`px-2 w-fit py-[0.1rem] uppercase border  text-[#fff] rounded-full text-[0.5rem] font-[500] ${
        newBadge && "border-[#525252] bg-[#0ea8c7]"
      } ${updateBadge && "border-[#525252] bg-orange-400"}`}
    >
      {title}
    </div>
  );
};

export default Badge;
