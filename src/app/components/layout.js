import Sidebar from "@/components/layout/sidebar/Sidebar";
import "@/app/globals.css";
import Navbar from "@/components/layout/header/Navbar";

export const metadata = {
  title: "Components",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://http://localhost:3000/"),
};

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <MobileNavbar /> */}
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[18%] 1024px:mr-[3rem]">
          <Sidebar startContent={0} />
        </div>

        <div
          className="w-full max-h-[89vh] min-h-[89vh] overflow-y-auto pt-[5rem] 640px:pt-[5rem] 640px:py-[10rem] 1024px:py-[2rem] 1024px:px-[0.5rem] relative"
          // style={{ scrollbarWidth: "none" }}
        >
          {/* <MobileSidebar startContent={0} /> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;
