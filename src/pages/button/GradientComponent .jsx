import React, { useState } from "react";
import { SiTailwindcss, SiCss3 } from "react-icons/si";
import { BsFillTriangleFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { debounce } from "lodash";

const GradientComponent = ({ index, name, css, tailwind, colors }) => {
  const copyCode = async (codeToCopy, message) => {
    await navigator.clipboard.writeText(codeToCopy);
    toast(`Copied ${message}`, {
      icon: "📋",
      style: {
        backgroundColor: "#010326",
        color: "#00f2fe",
      },
    });
  };

  return (
    <div
      className="group relative h-32 w-[22.5rem] rounded-2xl transition-all duration-150 md:hover:scale-105 border-[6px] border-[#010326] flex justify-center items-center"
      key={index}
      // style={{ background: css }}
    >
      <button className="px-16 py-4 rounded-lg" style={{ background: css }}>
        {name}
      </button>
      {/* component containing buttons to copy code, colors of the gradient */}
      <div className="absolute md:group-hover:flex md:hidden flex right-0 top-0 w-fit rounded-lg rounded-tl-none rounded-br-none bg-[#010326] transition-all duration-200 py-1 px-2 justify-center items-center border-2 border-[#010326]">
        <GradientCopyButton
          handleOnClick={() => copyCode(tailwind, "TailwindCSS")}
          tooltipText="Copy TailwindCSS"
        >
          <SiTailwindcss />
        </GradientCopyButton>
      </div>
      <div className="absolute md:group-hover:flex md:hidden flex left-0 top-0 w-fit rounded-lg rounded-s-none rounded-tr-none rounded-br bg-[#010326] transition-all duration-200 py-1 px-2 justify-center items-center border-2 border-[#010326]">
        <GradientCopyButton
          handleOnClick={() => copyCode(css, "CSS")}
          tooltipText="Copy CSS"
        >
          <SiCss3 />
        </GradientCopyButton>
      </div>
    </div>
  );
};

export default GradientComponent;

// This component is the button for copying the codes, color. Made it a separate component because it used several times and for easy customization.
const GradientCopyButton = ({ children, handleOnClick, tooltipText }) => {
  // state variables for setting hover state of button.
  const [isHovered, setIsHovered] = useState(false);

  // onMouseEnter function that passes the event handler into lodash's debounce function to add a delay of 700s and sets setIsHovered to true.
  const handleOnMouseEnter = debounce(() => setIsHovered(true), 700);

  // onMouseLeave function that sets setIsHovered to false and calls the handleOnMouseEnter.cancel() to cancel the calling of the handleOnMouseEnter function.
  const handleOnMouesLeave = () => {
    setIsHovered(false);
    handleOnMouseEnter.cancel();
  };

  return (
    <button
      className="flex p-2 text-gray-300 justify-center hover:text-white hover:bg-cyan-700 text-xl hover:bg-opacity-50 rounded-full transition-all duration-200"
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouesLeave}
    >
      {children}
      {/* Logic that displays a tooltip when hovered. If state variable isHovered is true it is displayed, else it does not. */}
      {isHovered && (
        <p className="absolute inline-flex justify-center z-50 mt-10 w-fit p-2 text-xs bg-cyan-700 rounded-xl">
          <BsFillTriangleFill className="absolute -mt-3 text-cyan-700" />
          {tooltipText}
        </p>
      )}
    </button>
  );
};
