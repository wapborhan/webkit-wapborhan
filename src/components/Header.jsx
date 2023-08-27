import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import DarkSwitcher from "./darkmode/DarkSwitcher";
import SERVICES from "../assets/data/allservices";

const Header = () => {
  const [data, setData] = useState(SERVICES);

  return (
    <nav className="border-general sticky top-0 z-40 border-b bg-slate-50/60 backdrop-blur-2xl transition-colors duration-500 dark:bg-[#0B1120]/80">
      <div className="container">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <NavLink className="flex items-center" to="/">
                <span
                  className="dark:text-white text-black dark:bg-transparent bg-white"
                  //  style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%"
                >
                  <span
                  //  style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%"
                  >
                    {/* <img
                      // style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0"
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27100%27%20height=%2732%27/%3e"
                    /> */}
                  </span>{" "}
                  WebKit WB
                  {/* <img
                    alt="Learn with Sumit"
                    src="/_next/static/media/lws-logo-light.ae7b3c3a.svg"
                    decoding="async"
                    data-nimg="intrinsic"
                    // style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                    srcset="/_next/static/media/lws-logo-light.ae7b3c3a.svg 1x, /_next/static/media/lws-logo-light.ae7b3c3a.svg 2x"
                  /> */}
                </span>
              </NavLink>
            </div>
          </div>
          <div className="flex space-x-2 lg:hidden">
            <div className="ml-auto flex flex-shrink-0 items-center p-1 text-gray-400 hover:text-white focus:outline-none">
              <DarkSwitcher />
            </div>
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none"
              id="headlessui-disclosure-button-:R396:"
              type="button"
              aria-expanded="false"
            >
              <a
                className="mantine-UnstyledButton-root mantine-Burger-root h-auto mantine-7qp4sr"
                title="Open navigation"
              >
                <div className="mantine-1asblv6 mantine-Burger-burger"></div>
              </a>
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <div className="flex space-x-2">
              <Link
                className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </Link>
              {data.map((navitem) => {
                console.log(navitem);
                return (
                  <Link
                    className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-3 py-2 text-sm font-medium"
                    activeClass="active"
                    to={navitem.name}
                    spy={true}
                    smooth={true}
                    key={Math.random()}
                  >
                    {navitem.name}
                  </Link>
                );
              })}
            </div>
            <div className="hidden lg:ml-4 lg:block">
              <div className="flex items-center space-x-4">
                <DarkSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
