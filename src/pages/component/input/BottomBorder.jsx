import ContentHeader from "@/components/shared/ContentHeader";
import ShowCode from "@/components/shared/ShowCode";
import { useState, useEffect } from "react";

const BottomBorder = () => {
  const [bottomBorderPreview, setBottomBorderPreview] = useState(true);
  const [bottomBorderCode, setBottomBorderCode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component is mounted
  }, []);

  const handleBottomBorderPreview = () => {
    setBottomBorderPreview(true);
    setBottomBorderCode(false);
  };

  const handleBottomBorderCode = () => {
    setBottomBorderCode(true);
    setBottomBorderPreview(false);
  };
  if (!isMounted) {
    // Prevents mismatching of HTML during server-side rendering
    return null;
  }
  return (
    <>
      <div className="mt-8">
        <ContentHeader
          text={"bottom bordered input"}
          id={"bottom_bordered_input"}
        />
      </div>
      <p className="w-full 425px:w-[80%] text-text text-[1rem]">
        This is a bottom-bordered input text field. Enter your information here
        for it to be processed accordingly.
      </p>
      <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
        <div className="relative">
          <div
            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
              bottomBorderPreview
                ? "translate-x-[0px] !w-[100px]"
                : "translate-x-[105px] rounded-br"
            }`}
          ></div>
          <button
            className={`${
              bottomBorderPreview && "text-tabTextColor"
            } px-6 py-2 border-b text-text z-[2] relative border-border`}
            onClick={handleBottomBorderPreview}
          >
            Preview
          </button>
          <button
            className={`${
              bottomBorderCode && "text-tabTextColor"
            } px-6 py-2 border-r border-b text-text relative z-[2] rounded-br border-border`}
            onClick={handleBottomBorderCode}
          >
            Code
          </button>
        </div>
        {bottomBorderPreview && (
          <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="border-border border-b outline-none px-4 w-full 1024px:w-[80%] py-3 focus:border-primary transition-colors duration-300"
            />
          </div>
        )}

        {bottomBorderCode && (
          <ShowCode
            code={`
<input
  type="text" 
  name="name" 
  id="name" 
  placeholder="Your name" 
  className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#3B9DF8] transition-colors duration-300"
/>
              `}
          />
        )}
      </div>
    </>
  );
};

export default BottomBorder;
