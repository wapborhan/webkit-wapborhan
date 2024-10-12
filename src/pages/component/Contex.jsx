"use client";
import { useState } from "react";

const Contex = ({ data }) => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  return (
    <div className="1024px:flex flex-col gap-4 sticky top-4 right-0 w-[20%] hidden">
      <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
        CONTENTS
      </h2>
      {data.map(({ headText, headId, id }) => {
        return (
          <a
            href={`#${headId}`}
            key={id}
            className={`${
              contentActiveTab === id && "!text-primary !border-primary"
            } text-[0.9rem] text-text border-l border-transparent pl-4 capitalize`}
            onClick={() => setContentActiveTab(id)}
          >
            {headText}
          </a>
        );
      })}
    </div>
  );
};

export default Contex;
