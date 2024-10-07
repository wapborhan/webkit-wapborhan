import ContentHeader from "@/components/shared/ContentHeader";
import ShowCode from "@/components/shared/ShowCode";
import { useState, useEffect } from "react";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const Icon = () => {
  const [iconInputPreview, setIconInputPreview] = useState(true);
  const [iconInputCode, setIconInputCode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component is mounted
  }, []);

  const handleIconInputPreview = () => {
    setIconInputPreview(true);
    setIconInputCode(false);
  };

  const handleIconInputCode = () => {
    setIconInputCode(true);
    setIconInputPreview(false);
  };

  if (!isMounted) {
    // Prevents mismatching of HTML during server-side rendering
    return null;
  }
  return (
    <>
      <div className="mt-8">
        <ContentHeader text={"input with icon"} id={"input_with_icon"} />
      </div>
      <p className="w-full 425px:w-[80%] text-text text-[1rem]">
        This is an input field with an icon. Enter your information here and use
        the icon for additional actions.
      </p>
      <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
        <div className="relative">
          <div
            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
              iconInputPreview
                ? "translate-x-[0px] !w-[100px]"
                : "translate-x-[105px] rounded-br"
            }`}
          ></div>
          <button
            className={`${
              iconInputPreview && "text-tabTextColor"
            } px-6 py-2 border-b text-text z-[2] relative border-border`}
            onClick={handleIconInputPreview}
          >
            Preview
          </button>
          <button
            className={`${
              iconInputCode && "text-tabTextColor"
            } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
            onClick={handleIconInputCode}
          >
            Code
          </button>
        </div>
        {iconInputPreview && (
          <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <div className="w-full 1024px:w-[80%] relative">
              <RiAccountCircleLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Username"
                className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
              />
            </div>

            <div className="w-full 1024px:w-[80%] relative">
              <RiLockPasswordLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
              />
            </div>

            <div className="w-full 1024px:w-[80%] relative">
              <MdOutlineMail className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
              />
            </div>
          </div>
        )}

        {iconInputCode && (
          <ShowCode
            code={`
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const Inputs = () => {
return (
<>
{/* username */}
      <div className="w-[80%] relative">
        <RiAccountCircleLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Username"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>

      {/* password */}
      <div className="w-[80%] relative">
        <RiLockPasswordLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>

      {/* email */}
      <div className="w-[80%] relative">
        <MdOutlineMail className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>
    </>
  );
};

export default Inputs;              
              `}
          />
        )}
      </div>
    </>
  );
};

export default Icon;
