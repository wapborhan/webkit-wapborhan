"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import toast from "react-hot-toast";

const InstallCode = ({ code, height }) => {
  const [isCopy, setIsCopy] = useState(false);

  // copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopy(true);
    toast.success("Successfully Copied!");
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };
  return (
    <div className="transition-all duration-300 ease-in-out relative">
      <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#000000d7] absolute right-0 top-0 cursor-pointer mr-1 rounded-md">
        {isCopy ? (
          <MdOutlineDone className="text-[1.3rem] text-primary" />
        ) : (
          <FaRegCopy
            className="text-[1.2rem] text-primary"
            onClick={copyToClipboard}
          />
        )}
      </div>
      <SyntaxHighlighter
        language="jsx"
        className={`syntax-highlighter text-[14px] max-h-[${height}] 4 max-w-full`}
        style={dracula}
        showLineNumbers
        wrapLines={false}
      >
        {code}
        {/* 00px:max-w-[380px] 425px:max-w-[610px] */}
      </SyntaxHighlighter>
    </div>
  );
};

export default InstallCode;
