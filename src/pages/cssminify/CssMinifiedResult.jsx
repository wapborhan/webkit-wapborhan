// CssMinifiedResult.js
import React from "react";

const CssMinifiedResult = ({ minifiedCss }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-3">
      <h2>Minified CSS</h2>
      {/* <pre>{minifiedCss}</pre> */}
      <textarea
        rows="10"
        // ref={textAreaRef}
        value={minifiedCss}
        className="text-black w-full p-2 border-2 rounded dark:border-white-300 border-gray-300"
      />
      <button
        type="submit"
        className="btn border-t-indigo-700 bg-emerald-700 p-5 rounded-md w-full"
      >
        Copy Minify CSS
      </button>
    </div>
  );
};

export default CssMinifiedResult;
