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
    <aside className="py-6 px-6 border-r h-[89vh] border-border flex-col gap-4 overflow-y-scroll sticky top-18 left-0 w-[320px] bg-secondary z-20 1024px:flex hidden">
      {/*  get starts  */}
      <div>
        <h3
          className={`${
            start ? "text-primary" : "text-gray-500"
          } flex items-center justify-between gap-1 text-[1rem] font-[500] capitalize cursor-pointer `}
          onClick={() => setStart(!start)}
        >
          getting-started
          <MdKeyboardArrowRight
            className={`${
              start && "rotate-[90deg] !text-primary"
            } text-[1.5rem] text-gray-500 transition-all duration-300`}
          />
        </h3>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            start ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul
            className={`flex flex-col ml-2 mt-3 overflow-hidden pl-4 sidemenu`}
          >
            {getStartedData.map(({ id, link, title }) => {
              return (
                <li key={id}>
                  <Link
                    href={`/getting-started/${link}`}
                    className={`${
                      pathName === link &&
                      "active  rounded-md border-primary bg-primary hover:!bg-danger  !text-secondary font-[500] "
                    } text-text rounded-md flex items-center gap-3 hover:bg-slate-200`}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/*  components  */}
      <div>
        <h3
          className={`${
            components ? "text-primary" : "text-gray-500"
          } flex items-center justify-between gap-1 text-[1rem]  font-[500] capitalize cursor-pointer`}
          onClick={() => setComponents(!components)}
        >
          Components
          <MdKeyboardArrowRight
            className={`${
              components && "rotate-[90deg] !text-primary"
            } text-[1.5rem] text-gray-500 transition-all duration-300`}
          />
        </h3>

        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            components ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul
            className={`flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4 sidemenu`}
          >
            <li>
              <Link
                href="/components/all"
                className={`${
                  pathName === "all" &&
                  "active w-full rounded-md border-primary bg-primary hover:bg-danger  text-secondary font-[500]"
                }  border-[#9caebc] flex `}
              >
                All Components
              </Link>
            </li>

            {componentsData.map((item) => {
              return (
                <>
                  <li
                    className={`sectionHeader  tracking-widest font-[500] hover:font-[500] relative uppercase !text-[1rem] `}
                    key={item.id}
                  >
                    {item.name}
                  </li>
                  {item?.components.map(({ id, title, link, badge }) => {
                    return (
                      <li key={id}>
                        <Link
                          href={`/components/${link}`}
                          className={`${
                            pathName === link &&
                            "active rounded-md  border-primary bg-primary hover:!bg-danger text-secondary font-[500]"
                          } flex rounded-md items-center gap-[10px] hover:bg-slate-200 hover:text-black`}
                        >
                          {title}
                          {badge && <Badge title={badge} />}
                          {/*  */}
                        </Link>
                      </li>
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
