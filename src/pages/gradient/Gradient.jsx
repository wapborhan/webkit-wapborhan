import "./App.css";
// import "../../assets/tailwind.css";
import arrow from "../../assets/img/arrow.svg";
import radial from "../../assets/img/radial.svg";
import { useState, useEffect, useRef } from "react";
import chroma from "chroma-js";
import Button from "./Button";
import Color from "./Color";
import Code from "./Code";

function Gradient() {
  const [color1, setColor1] = useState("#ff2600");
  const [color2, setColor2] = useState("#0000FF");
  const [direction, setDirection] = useState("linear-gradient");
  // const [generated1, setGenerated1] = useState("");
  // const [generated2, setGenerated2] = useState("");
  // const [generated3, setGenerated3] = useState("");
  const [orientation, setOrientation] = useState("to right bottom");
  const [error, setError] = useState("");
  const [invertedcolor1, setinvertedColor1] = useState("");
  const [invertedcolor2, setinvertedColor2] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  // const hex = useRef(color1);
  // const hex2 = useRef(color2);

  const ulStyle = {
    backgroundImage:
      direction +
      "(" +
      orientation +
      "," +
      color1 +
      // "," +
      // generated1 +
      // "," +
      // generated2 +
      // "," +
      // generated3 +
      "," +
      color2 +
      ")",
  };
  const cssCode =
    direction +
    "(" +
    orientation +
    "," +
    color1 +
    "," +
    // generated1 +
    // "," +
    // generated2 +
    // "," +
    // generated3 +
    // "," +
    color2 +
    ");";

  useEffect(() => {
    generateColors();
  });

  const changeOrientation = function (ori) {
    console.log(ori);
    if (ori === "circle") {
      setDirection("radial-gradient");
      setOrientation(ori);
    } else if (ori === "conic") {
      setDirection("conic-gradient");
      setOrientation("from 1turn at 50% 50%");
    } else {
      setDirection("linear-gradient");
      setOrientation(ori);
    }
  };

  const generateColors = function () {
    if (chroma.valid(color1) && chroma.valid(color2)) {
      // let word = chroma.scale([color1, color2]).mode("lch").colors(5);
      // setGenerated1(word[1]);
      // setGenerated2(word[2]);
      // setGenerated3(word[3]);

      // setinvertedColor1(checkContrast(color1));
      // setinvertedColor2(checkContrast(color2));

      setError("");
    } else {
      setError("Color are no valid!");
    }
  };

  // function checkContrast(color) {
  //   const contrast = chroma(color).luminance();
  //   if (contrast > 0.6) {
  //     return "#000";
  //   } else {
  //     return "#fff";
  //   }
  // }

  // function doJob(e) {
  //   e.preventDefault();
  //   setColor1(hex.current.value);
  //   setColor2(hex2.current.value);
  // }
  //const boxOneStyle = { background: color1; color: }
  const icolor1 = { background: color1, color: invertedcolor1 };
  const icolor2 = { background: color2, color: invertedcolor2 };

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess(alert("Copied"));
  }

  const handleChangeColor1 = (event) => {
    setColor1(event.target.value);
  };
  const handleChangeColor2 = (event) => {
    setColor2(event.target.value);
  };

  return (
    <div className=" dark:bg-[#0B1120]  dark:bg-none">
      <div className="container mx-auto pt-5 pb-5">
        <div className="flex">
          <div className="block rounded-lg shadow-lg bg-white text-center w-full dark:bg-[#12192d]">
            <div
              className="py-3 px-6 border-b border-gray-300 gradientstop rounded"
              style={ulStyle}
            ></div>
            <div className="flex mx-5 my-3">
              <div className="flex-initial w-3/12">
                <Color
                  error={error}
                  color1={color1}
                  icolor1={icolor1}
                  handleChangeColor1={handleChangeColor1}
                  handleChangeColor2={handleChangeColor2}
                  color2={color2}
                  icolor2={icolor2}
                  // setColor2={setColor2}
                />
              </div>
              <div className="flex-initial w-9/12">
                <Button
                  arrow={arrow}
                  radial={radial}
                  changeOrientation={changeOrientation}
                />
              </div>
            </div>
            <div className="py-0 px-0 border-t border-gray-300 text-gray-600 dark:text-white w-100">
              <Code
                textAreaRef={textAreaRef}
                cssCode={cssCode}
                copyToClipboard={copyToClipboard}
                copySuccess={copySuccess}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gradient;
