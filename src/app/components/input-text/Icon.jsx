import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import CompCard from "@/components/shared/CompCard";

const Icon = ({ compData }) => {
  return (
    <>
      <CompCard compData={compData}>
        {/* <div className="w-full 1024px:w-[80%]"> */}
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
        {/* </div> */}
      </CompCard>
    </>
  );
};

export default Icon;
