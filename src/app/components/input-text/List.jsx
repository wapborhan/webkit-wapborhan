import CompCard from "@/components/shared/CompCard";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const List = ({ compData }) => {
  return (
    <>
      <CompCard compData={compData[0]}>
        <div className="w-full 1024px:w-[80%]">
          <label htmlFor="name" className="text-[15px] text-text font-[400]">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="primary"
            id="name"
            placeholder="Your name"
            className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
          />
        </div>
      </CompCard>{" "}
      <CompCard compData={compData[1]}>
        <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
          <input
            type="text"
            name="border"
            id="name"
            placeholder="Your name"
            className="border-border border-b outline-none px-4 w-full 1024px:w-[80%] py-3 focus:border-primary transition-colors duration-300"
          />
        </div>
      </CompCard>{" "}
      <CompCard compData={compData[2]}>
        <div className="relative w-full 1024px:w-[80%]">
          <input
            type="text"
            name="animated"
            id="name"
            className="peer border-border border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
          />
          <div className="absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-[#777777] peer-focus:px-1 transition-all duration-300">
            {" Your name"}
          </div>
        </div>
      </CompCard>{" "}
      <CompCard compData={compData[3]}>
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
      </CompCard>
    </>
  );
};

export default List;
