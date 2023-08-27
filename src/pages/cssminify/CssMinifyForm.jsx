// CssMinifyForm.js
import React, { useState } from "react";

const CssMinifyForm = ({ onMinify }) => {
  const [cssCode, setCssCode] = useState("");

  const handleInputChange = (e) => {
    setCssCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onMinify(cssCode);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <h2>CSS Code</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          rows="10"
          placeholder="Paste your CSS code here..."
          value={cssCode}
          onChange={handleInputChange}
          className="text-black p-2 border-2 rounded dark:border-white-300 border-gray-300"
        />
        <button
          type="submit"
          className="btn border-t-indigo-700 bg-emerald-700 p-5 rounded-md"
        >
          Minify CSS
        </button>
      </form>
    </div>
  );
};

export default CssMinifyForm;
