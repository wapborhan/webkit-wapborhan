"use client";
import { useState } from "react";

const Contex = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);
  return (
    <div className="1024px:flex flex-col gap-4 sticky top-4 right-0 w-[40%] hidden">
      <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
        CONTENTS
      </h2>
      <a
        href="#primary_input"
        className={`${
          contentActiveTab === 1 && "!text-primary !border-primary"
        } text-[0.9rem] text-text border-l border-transparent pl-4`}
        onClick={() => setContentActiveTab(1)}
      >
        Primary Input
      </a>
      <a
        href="#bottom_bordered_input"
        className={`${
          contentActiveTab === 2 && "!text-primary !border-primary"
        } text-[0.9rem] text-text border-l border-transparent pl-4`}
        onClick={() => setContentActiveTab(2)}
      >
        Bottom Border Input
      </a>
      <a
        href="#animate_label_input"
        className={`${
          contentActiveTab === 3 && "!text-primary !border-primary"
        } text-[0.9rem] text-text border-l border-transparent pl-4`}
        onClick={() => setContentActiveTab(3)}
      >
        Animate Label
      </a>
      <a
        href="#input_with_icon"
        className={`${
          contentActiveTab === 4 && "!text-primary !border-primary"
        } text-[0.9rem] text-text border-l border-transparent pl-4`}
        onClick={() => setContentActiveTab(4)}
      >
        Input With Icon
      </a>
      <a
        href="#password_input"
        className={`${
          contentActiveTab === 5 && "!text-primary !border-primary"
        } text-[0.9rem] text-text border-l border-transparent pl-4`}
        onClick={() => setContentActiveTab(5)}
      >
        Password Input
      </a>
      <a
        href="#link_input"
        className={`${
          contentActiveTab === 6 && "!text-primary !border-primary"
        } text-[0.9rem] text-text border-l border-transparent pl-4`}
        onClick={() => setContentActiveTab(6)}
      >
        Link Input
      </a>
      <a
        href="#price_input"
        className={`${
          contentActiveTab === 7 && "!text-primary !border-primary"
        } text-[0.9rem] text-text border-l border-transparent pl-4`}
        onClick={() => setContentActiveTab(7)}
      >
        Price Input
      </a>
      <a
        href="#search_input"
        className={`${
          contentActiveTab === 8 && "!text-primary !border-primary"
        } text-[0.9rem] text-text border-l border-transparent pl-4`}
        onClick={() => setContentActiveTab(8)}
      >
        Search Input
      </a>
      <a
        href="#join_us_input"
        className={`${
          contentActiveTab === 9 && "!text-primary !border-primary"
        } text-[0.9rem] text-text border-l border-transparent pl-4`}
        onClick={() => setContentActiveTab(9)}
      >
        Join Us Input
      </a>
    </div>
  );
};

export default Contex;
