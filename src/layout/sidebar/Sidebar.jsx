"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Badge from "@/components/shared/Badge";
import { componentsData, getStartedData } from "@/utils/sidebarData";

const Sidebar = () => {
  const [start, setStart] = useState(true);
  const [components, setComponents] = useState(true);
  // const [blocks, setBlocks] = useState(true);
  const path = usePathname();
  const pathName = path.split("/").pop();

  return (
    <aside className="py-6 px-10 border-r h-[89vh] border-border flex-col gap-4 overflow-y-scroll sticky top-18 left-0 w-[320px] bg-secondary z-20 1024px:flex hidden">
      {/*  get starts  */}
      <div>
        <h3
          className={`${
            start ? "text-[#0471d6]" : "text-gray-500"
          } flex items-center justify-between gap-1 text-[1rem] font-[500] capitalize cursor-pointer `}
          onClick={() => setStart(!start)}
        >
          getting-started
          <MdKeyboardArrowRight
            className={`${
              start && "rotate-[90deg] !text-[#0471d6]"
            } text-[1.5rem] text-gray-500 transition-all duration-300`}
          />
        </h3>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            start ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul className={`flex flex-col ml-2 mt-3 overflow-hidden pl-4`}>
            {getStartedData.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/getting-started/${item.link}`}
                  className={`${
                    pathName === item.link &&
                    "border-l  rounded-tr rounded-br border-primary bg-primary hover:bg-danger  !text-secondary font-[500]"
                  }   border-l text-text border-[#9caebc] flex items-center gap-3`}
                >
                  {item.title}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {/*  components  */}
      <div>
        <h3
          className={`${
            components ? "text-[#0471d6]" : "text-gray-500"
          } flex items-center justify-between gap-1 text-[1rem]  font-[500] capitalize cursor-pointer`}
          onClick={() => setComponents(!components)}
        >
          Components
          <MdKeyboardArrowRight
            className={`${
              components && "rotate-[90deg] !text-[#0471d6]"
            } text-[1.5rem] text-gray-500 transition-all duration-300`}
          />
        </h3>

        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            components ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul
            className={`flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4`}
          >
            <Link
              href="/components/all"
              className={`${
                pathName === "all" &&
                "border-l  rounded-tr rounded-br border-primary bg-primary hover:bg-danger  text-secondary font-[500]"
              }   border-l border-[#9caebc] `}
            >
              All Components
            </Link>

            {componentsData.map((item) => {
              return (
                <>
                  <Link
                    href=""
                    className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                    key={item.id}
                  >
                    {item.name}
                  </Link>
                  {item?.components.map((comp) => {
                    return (
                      <Link
                        href={`/components/${comp?.link}`}
                        className={`${
                          pathName === comp?.link &&
                          "border-l  rounded-tr rounded-br border-primary bg-primary hover:bg-danger text-secondary font-[500]"
                        }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                        key={comp.id}
                      >
                        {comp.title}
                        {comp.badge && <Badge title={comp.badge} />}
                        {/*  */}
                      </Link>
                    );
                  })}
                </>
              );
            })}
          </ul>
        </div>
      </div>

      {/*  blocks  */}
    </aside>
  );
};

export default Sidebar;
