import React from "react";
import useDarkSide from "./DarkMode";
import { CiDark, CiLight } from "react-icons/ci";

export default function DarkSwitcher() {
  const [colorTheme, setTheme] = useDarkSide();

  const toggleDarkMode = () => {
    setTheme(colorTheme);
  };

  return (
    <>
      <div
        className="mantine-ThemeIcon-root focus-reset flex-shrink-0 cursor-pointer p-1 mantine-1hy8bmw dark:text-white "
        // onClick={handleDark}
        onClick={toggleDarkMode}
      >
        {colorTheme === "dark" ? <CiDark /> : <CiLight />}
      </div>
    </>
  );
}
