import React, { useState, Fragment } from "react";
import SERVICES from "../assets/data/allservices.js";
import { NavLink } from "react-router-dom";

const SerItem = () => {
  const [data, setData] = useState(SERVICES);
  console.log(data);
  return (
    <Fragment>
      {data.map((item) => {
        return (
          <div className="playground" key={Math.random()}>
            <div className="catt-title ">
              <div className="text-left">
                <a className="rn-btn btn-brd mr--30">
                  <span>{item.name}</span>
                </a>
              </div>
            </div>
            <div className="grid w-full gap-4 lg:grid-cols-3">
              {item.sub_cat.map((subitem) => {
                // console.log(subitem);
                return (
                  <div
                    className="border-general rounded-1  bg-0 border p-8 transition-all shadow"
                    key={Math.random()}
                  >
                    <div
                      className=" mx-auto flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${subitem.color}` }}
                    >
                      I
                    </div>
                    <h2 className="text-normal text-0 mx-0 mb-8 mt-8 box-border border-0 border-solid border-gray-200 text-center font-medium">
                      {subitem.title}
                    </h2>

                    <div className="mt-4 text-center">
                      <NavLink
                        className="mantine-Button-outline mantine-Button-root mantine-7a5dwr"
                        type="button"
                        to={subitem.link}
                      >
                        <div className="mantine-3xbgk5 mantine-Button-inner">
                          <span className="mantine-Button-icon mantine-Button-leftIcon mantine-1g4orza">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="14"
                              width="14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                          </span>
                          <span className="mantine-qo1k2 mantine-Button-label">
                            এখান থেকে শিখুন
                          </span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default SerItem;
