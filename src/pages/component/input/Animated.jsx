"use client";
import ContentHeader from "@/components/shared/ContentHeader";
import ShowCode from "@/components/shared/ShowCode";
import React, { useState } from "react";

const Animated = () => {
  const [animateLabelPreiview, setAnimateLabelPreview] = useState(true);
  const [animateLabelCode, setAnimateLabelCode] = useState(false);

  const handleAnimateLabelPreview = () => {
    setAnimateLabelPreview(true);
    setAnimateLabelCode(false);
  };

  const handleAnimateLabelCode = () => {
    setAnimateLabelCode(true);
    setAnimateLabelPreview(false);
  };
  return (
    <>
      <div className="mt-8">
        <ContentHeader
          text={"animate label input"}
          id={"animate_label_input"}
        />
      </div>

      <p className="w-full 425px:w-[80%] text-text text-[1rem]">
        This is an animated label text input field. Enter your data here, and
        the label will animate accordingly.
      </p>

      <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
        <div className="relative">
          <div
            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
              animateLabelPreiview
                ? "translate-x-[0px] !w-[100px]"
                : "translate-x-[105px] rounded-br"
            }`}
          ></div>
          <button
            className={`${
              animateLabelPreiview && "text-tabTextColor"
            } px-6 py-2 border-b text-text z-[2] relative border-border`}
            onClick={handleAnimateLabelPreview}
          >
            Preview
          </button>
          <button
            className={`${
              animateLabelCode && "text-tabTextColor"
            } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
            onClick={handleAnimateLabelCode}
          >
            Code
          </button>
        </div>
        {animateLabelPreiview && (
          <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <label className="relative w-full 1024px:w-[80%]">
              <input
                type="text"
                name="name"
                id="name"
                className="peer border-border border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
              />
              <span className="absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-[#777777] peer-focus:px-1 transition-all duration-300">
                Your name
              </span>
            </label>
          </div>
        )}

        {animateLabelCode && (
          <ShowCode
            code='
<label className="relative w-[80%]">
<input type="text" name="name" id="name" className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
/>
<span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
Your name
</span>
</label>
        '
          />
        )}
      </div>
    </>
  );
};

export default Animated;
