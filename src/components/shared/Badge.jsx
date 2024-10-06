const Badge = ({ title }) => {
  const updateBadge = title === "Update";
  const newBadge = title === "New";

  return (
    <div
      className={`px-2 w-fit py-[0.1rem] uppercase border  text-[#fff] rounded-full text-[0.5rem] font-[500] ${
        newBadge && "border-[#0ea8c7] bg-[#0ea8c7]"
      } ${updateBadge && "border-orange-400 bg-orange-400"}`}
    >
      {title}
    </div>
  );
};

export default Badge;
