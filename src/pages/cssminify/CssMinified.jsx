"use client";
import { useState } from "react";
import CssMinifyForm from "./CssMinifyForm";
import CssMinifiedResult from "./CssMinifiedResult";
import { minify } from "csso"; // Import the minify function

const CssMinified = () => {
  const [minifiedCss, setMinifiedCss] = useState("");

  const handleMinify = (cssCode) => {
    const minifiedCode = minifyCssCode(cssCode);
    setMinifiedCss(minifiedCode);
  };

  const minifyCssCode = (cssCode) => {
    const minifiedResult = minify(cssCode).css; // Use the minify function
    return minifiedResult;
  };
  return (
    <div className="h-vh">
      <div className="dark:text-white">
        <div className="container mx-auto">
          <h2 className="pt-9 pb-9 text-center">CSS Minify Converter</h2>
          <div className="flex 1024px:flex-row flex-col justify-between gap-5 items-center pb-10 pt-10 w-full">
            <CssMinifyForm onMinify={handleMinify} />
            {/* {minifiedCss && <CssMinifiedResult minifiedCss={minifiedCss} />} */}
            <CssMinifiedResult minifiedCss={minifiedCss} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CssMinified;
