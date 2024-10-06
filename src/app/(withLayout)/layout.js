import Navbar from "@/layout/header/Navbar";

const layout = ({ children }) => {
  return (
    <div className="w-full max-w-[1615px] mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
