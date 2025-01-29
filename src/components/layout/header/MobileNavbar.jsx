"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLink } from "@/utils/sidebarData";
import { CiMenuFries } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { RxDiscordLogo } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import Search from "./Search";

const MobileNavbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".zenuiSearchComponent") &&
        !event.target.closest(".zenuiSearchInput")
      ) {
        setIsSearchOpen(false);
      }

      if (
        !event.target.closest(".mobileSidebar") &&
        !event.target.closest(".mobileSidebarButton")
      ) {
        setSidebarOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="flex 1024px:hidden items-center justify-between w-full px-5 425px:px-10 backdrop-blur-md  py-3 shadow-sm sticky shadow-shadowColor top-0 left-0 z-50">
        <div className="flex items-center gap-8 relative">
          <div className="w-[100px] h-[300px] bg-[#9A04F5] absolute top-[-150px] opacity-30 left-0 blur-[70px] rotate-[-50deg]"></div>

          <Link href="/" className="relative">
            <span className="px-2 absolute right-[-33px] text-[#a4a4a8] top-1 py-[1px] bg-[#f0f0f1] rounded-full text-[10px]">
              v2.0
            </span>
            <Image
              src="/footer_logo.png"
              alt="logo"
              width={150}
              height={80}
              className="w-[60px] 1024px:w-[70px] z-20 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <a href="https://github.com/wapborhan" target="_blank">
              <FiGithub
                className={`text-[2.3rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`}
              />
            </a>
          </div>

          <CiMenuFries
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-[2.3rem] mobileSidebarButton text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer"
          />
        </div>
      </nav>

      {/*  sidebar  */}
      <aside
        className={`${sidebarOpen ? "translate-x-0 opacity-100 z-50" : "1024px:translate-x-[300px] translate-x-[600px] opacity-0 z-[-1]"} fixed top-[62px] mobileSidebar right-0 py-5 px-[2.3rem] w-[80%] block 1024px:hidden 425px:w-[60%] h-screen transition-all duration-500 bg-white toastshadow`}
      >
        {/* <div
          className="zenuiSearchInput relative w-full"
          onClick={handleSearchClick}
        >
          <IoIosSearch
            className={`text-gray-400 absolute left-3 top-[0.6rem] text-[1.5rem]`}
          />
          <input
            type="search"
            name=""
            id=""
            readOnly={true}
            placeholder="Search..."
            className={`py-[0.59rem] pl-10 border w-full bg-transparent border-gray-200 rounded-md focus:ring-0 outline-none`}
          />
          <span
            className={`text-gray-500 bg-gray-50 border-gray-200 px-2 py-1 text-[0.8rem] font-[500] rounded-md h-[75%] absolute right-1.5 border top-[0.35rem] flex items-center justify-center`}
          >
            Ctrl + S
          </span>
        </div> */}
        <ul className="text-gray-600 navUl flex flex-col mt-5 items-start gap-8 font-[500] capitalize text-[1.2rem]">
          {navLink.map(({ title, id, link, badge }) => {
            return (
              <li className="relative pr-[45px]" key={id}>
                {badge ? (
                  <div className="bg-primary rounded-[2px] text-white animate-pulse text-[0.5rem] px-2 py-0.5 w-max absolute top-[6px] z-50 right-0">
                    {badge}
                    <div className="w-[8px] h-[8px] bg-primary rotate-[45deg] absolute left-[-4px] top-[0.229rem]"></div>
                  </div>
                ) : (
                  ""
                )}

                <p
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className={pathname === link ? "!text-primary" : ""}
                >
                  <Link href={link}>{title}</Link>
                </p>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* <div
        className={`${isSearchOpen ? "visible z-[100]" : "invisible z-[-1]"} transition-all duration-500`}
      >
        <Search isSearchOpen={isSearchOpen} />
      </div> */}
    </>
  );
};

export default MobileNavbar;
