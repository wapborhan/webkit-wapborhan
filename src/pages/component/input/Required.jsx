"use client";
import ContentHeader from "@/components/shared/ContentHeader";
import ShowCode from "@/components/shared/ShowCode";
import { useState, useEffect } from "react";

const Required = () => {
  const [primaryInputPreview, setPrimaryInputPreview] = useState(true);
  const [primaryInputCode, setPrimaryInputCode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures the component is mounted
  }, []);

  const handlePrimaryInputPreview = () => {
    setPrimaryInputPreview(true);
    setPrimaryInputCode(false);
  };

  const handlePrimaryInputCode = () => {
    setPrimaryInputCode(true);
    setPrimaryInputPreview(false);
  };

  if (!isMounted) {
    // Prevents mismatching of HTML during server-side rendering
    return null;
  }
  return (
    <>
      <ContentHeader text={"required input"} id={"primary_input"} />

      <p className="w-full 425px:w-[80%] text-text text-[1rem]">
        This is an input text field. Use it to enter your information, which
        will be processed accordingly.
      </p>

      <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
        <div className="relative">
          <div
            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${
              primaryInputPreview
                ? "translate-x-[0px] !w-[100px]"
                : "translate-x-[105px] rounded-br"
            }`}
          ></div>
          <button
            className={`${
              primaryInputPreview && "text-tabTextColor"
            } px-6 py-2 border-b z-[2] relative text-text border-border`}
            onClick={handlePrimaryInputPreview}
          >
            Preview
          </button>
          <button
            className={`${
              primaryInputCode && " text-tabTextColor"
            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
            onClick={handlePrimaryInputCode}
          >
            Code
          </button>
        </div>
        {primaryInputPreview && (
          <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
            <div className="w-full 1024px:w-[80%]">
              <label
                htmlFor="name"
                className="text-[15px] text-text font-[400]"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
              />
            </div>
          </div>
        )}

        {primaryInputCode && (
          <ShowCode
            code={`
const Textarea = () => {
  
return (
    <div className="w-[80%]">
      <label htmlFor="name" className="text-[15px] font-[400]">
        Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
      />
    </div>
  );
};

export default Textarea;`}
          />
        )}
      </div>
    </>
  );
};

export default Required;
