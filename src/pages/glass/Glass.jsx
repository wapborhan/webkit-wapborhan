"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Glass = () => {
  const [bgNumber, setBgNumber] = useState(
    Math.floor(Math.random() * (5 - 1)) + 1
  );
  const [hexColor, setHexColor] = useState("#00BFFF");
  const [rgbColor, setRgbColor] = useState("#00BFFF");
  const [bgColor, setBgColor] = useState("rgba(0, 191, 255, 0.025)");
  const [textContent, setTextContent] = useState();
  const [hexRgb, setHexRgb] = useState();

  const [borderRadius, setBorderRadius] = useState(10);
  const [opacity, setOpacity] = useState(75);
  const [blur, setBlur] = useState(5);
  const [border, setBorder] = useState(2);
  const [imageSwitch, setImageSwitch] = useState(false);
  const [textSwitch, setTextSwitch] = useState(false);

  const changeBackground = () => {
    if (bgNumber < 4) {
      setBgNumber(bgNumber + 1);
    } else {
      setBgNumber(1);
    }
  };

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

  useEffect(() => {
    function hex2rgb() {
      var hex_color = hexColor;
      var rgb_color;
      var pattern_color = "^#([A-Fa-f0-9]{6})$";

      if (hex_color.match(pattern_color)) {
        var hex_color = hex_color.replace("#", ""),
          r = parseInt(hex_color.substring(0, 2), 16),
          g = parseInt(hex_color.substring(2, 4), 16),
          b = parseInt(hex_color.substring(4, 6), 16);
        return (rgb_color = r + "," + g + "," + b + ",");
      } else {
        console.log("Error Color Format");
      }
    }

    setHexRgb(hex2rgb());

    const data = `.glass-container {
    width: 700px;
    height: 375px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: ${borderRadius}px;
    backdrop-filter: blur(${blur}px);
    background-color: rgba(${hex2rgb()} ${parseInt(opacity) / 1000});
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: ${border}px rgba(255,255,255,0.4) solid;
    border-bottom: ${border}px rgba(40,40,40,0.35) solid;
    border-right: ${border}px rgba(40,40,40,0.35) solid;
}`;

    setTextContent(data);

    // var copina = (document.querySelector("#code_text2").textContent =
    //   `/* This was made with GlassGenerator.netlify.app */ \n
    // .glass-container{
    //     width: 700px;
    //     height: 375px;
    //     color: white;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     gap: 20px;
    //     border-radius: ${borderRadius}px;
    //     backdrop-filter: blur(${blur}px);
    //     background-color: rgba(${hex2rgb()} ${parseInt(opacity) / 1000});
    //     box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    //     border: ${border}px rgba(255,255,255,0.4) solid;
    //     border-bottom: ${border}px rgba(40,40,40,0.35) solid;
    //     border-right: ${border}px rgba(40,40,40,0.35) solid;
    // }`);

    // function hex2rgb() {
    //   var hex_color = document.getElementById("input_hexColor").value;
    //   var rgb_color;
    //   var pattern_color = "^#([A-Fa-f0-9]{6})$";

    //   if (hex_color.match(pattern_color)) {
    //     var hex_color = hex_color.replace("#", ""),
    //       r = parseInt(hex_color.substring(0, 2), 16),
    //       g = parseInt(hex_color.substring(2, 4), 16),
    //       b = parseInt(hex_color.substring(4, 6), 16);
    //     return (rgb_color = r + "," + g + "," + b + ",");
    //   } else {
    //     console.log("Error Color Format");
    //   }
    // }

    /* --- FUNCION BOTON DE COPY/PASTE --- */
  }, [blur, border, borderRadius, opacity, hexColor]);

  return (
    <div
      className="w-full h-full transition-all duration-700 !bg-cover !bg-center !bg-no-repeat"
      style={{ background: `url(/images/bg-default-0${bgNumber}.jpg)` }}
    >
      <section
        className="hero"
        id="hero"
        // style={{ background: `url(/images/bg-default-0${bgNumber}.jpg)` }}
      >
        <figure
          className="arrows left"
          id="arrow_left"
          title="Change background"
          onClick={changeBackground}
        ></figure>
        <div
          className="glass-container"
          id="glass"
          style={{
            backdropFilter: `blur(${blur}px)`,
            // backgroundColor: `${bgColor}`,
            backgroundColor: `rgba(${hexRgb} ${parseInt(opacity) / 1000})`,
            boxShadow: `2px 8px 8px rgba(0,0,0,0.3)`,
            border: `${border}px rgba(255,255,255,0.4) solid`,
            borderBottom: `${border}px rgba(40,40,40,0.35) solid`,
            borderRight: `${border}px rgba(40,40,40,0.35) solid`,
            borderRadius: borderRadius,
          }}
        >
          <figure
            className={`glass-container__profile  transition-all delay-100 ${imageSwitch ? "hidden" : ""}`}
            id="profile"
          ></figure>
          <div
            className={`glass-container__text transition-all delay-100 ${textSwitch ? "hidden" : ""}`}
            id="text"
          >
            <h2 id="glass_title">Glass Morphism</h2>
            <p id="lorem_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever since the 1500s.
            </p>
          </div>
        </div>
        <figure
          className="arrows right"
          id="arrow_right"
          title="Change background"
          onClick={changeBackground}
        ></figure>
      </section>
      <section className="controls-section">
        <div className="controls-container">
          <div className="controls__inputs">
            <div className="control__input-info">
              <p>Opacity</p>
              <div className="range_data">
                <span className="range_data--text">-</span>
                <span className="range_data--text" id="opacity_data">
                  {opacity / 1000}
                </span>
                <span className="range_data--text">+</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={opacity}
                onChange={(e) => setOpacity(e.target.value)}
                className="slider"
                id="input_opacity"
              />
            </div>

            <div className="control__input-info">
              <p>Blur</p>
              <div className="range_data">
                <span className="range_data--text">-</span>
                <span className="range_data--text" id="blur_data">
                  {blur}
                </span>
                <span className="range_data--text">+</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={blur}
                onChange={(e) => setBlur(Number(e.target.value))}
                className="slider"
                id="input_blur"
              />
            </div>

            <div className="control__input-info">
              <p>Border</p>
              <div className="range_data">
                <span className="range_data--text">-</span>
                <span className="range_data--text" id="border_data">
                  {border > 0 ? `${border} px` : "none"}
                </span>
                <span className="range_data--text">+</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={border}
                onChange={(e) => setBorder(Number(e.target.value))}
                className="slider"
                id="input_border"
              />
            </div>

            <div className="control__input-info">
              <p>Border Radius</p>
              <div className="range_data">
                <span className="range_data--text">-</span>
                <span className="range_data--text" id="radius_data">
                  {`${borderRadius} px`}
                </span>
                <span className="range_data--text">+</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={borderRadius}
                onChange={(e) => setBorderRadius(Number(e.target.value))}
                className="slider"
                id="input_radius"
              />
            </div>

            {/* <div className="control__input-info">
              <p>Backgroung Image</p>
              <input
                type="text"
                className="slider"
                placeholder="type here the image url"
                id="bgInput"
              />
            </div> */}
          </div>

          {/* <!-- SWITCH'S BUTTONS --> */}
          <div className="switchs">
            <div className="container__button-switch gap-6">
              <div className="btnsr">
                <span className="switch_name">Image</span>
                <button
                  className={`switch transition-all duration-75 ${imageSwitch ? "active__image" : ""}`}
                  id="switch_image"
                  onClick={() => setImageSwitch(!imageSwitch)}
                >
                  <span>OFF</span>
                  <span>ON</span>
                </button>
              </div>
              <div className="btnsr">
                <span className="switch_name">Text</span>
                <button
                  className={`switch ${textSwitch ? "active__text" : ""}`}
                  id="switch_text"
                  onClick={() => setTextSwitch(!textSwitch)}
                >
                  <span>OFF</span>
                  <span>ON</span>
                </button>
              </div>
            </div>
            <div className="container__button-switch flex flex-col gap-2">
              <p>Glass Color</p>
              <div className="glass_color_container flex gap-4">
                <input
                  type="color"
                  value={rgbColor}
                  onChange={(e) => {
                    setRgbColor(e.target.value);
                    setHexColor(e.target.value);
                  }}
                  className="visual_color_input"
                  id="input_rgbColor"
                />
                <input
                  type="text"
                  value={hexColor}
                  onChange={(e) => {
                    setHexColor(e.target.value);
                    setRgbColor(e.target.value);
                  }}
                  className="text_input_color"
                  id="input_hexColor"
                />
              </div>
            </div>
          </div>

          {/* <!-- MODAL CONTAINER --> */}
          <a
            href="#demo-modal"
            className="generator_button"
            title="Generate the code"
          >
            <div className="generator_button--uptext">
              <span className="generator_button--codetext">&lt;glass&gt;</span>
              <span className="text02">CODE</span>
              <span className="generator_button--codetext">&lt;/glass&gt;</span>
            </div>
            <span className="text01">GENERATOR</span>
          </a>
          {/* <!-- </button> --> */}
        </div>
      </section>
      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <span className="code_title">HTML</span>
          <pre>
            <div className="button_container">
              <code className="code_text" id="code_text12">
                {`<div className="glass-container" id="glass"></div>`}
              </code>
              <button
                className="button_copy"
                id="copy_buttonHTML"
                onClick={() =>
                  copyCode(
                    `<div className="glass-container" id="glass"></div>`,
                    "HTML"
                  )
                }
              >
                COPY
              </button>
            </div>
          </pre>
          <span className="code_title">CSS</span>
          <pre>
            <div className="button_container">
              <code className="code_text" id="code_text22">
                {textContent ? textContent : "Loading..."}
              </code>
              <button
                className="button_copy"
                id="copy_buttonCSS"
                onClick={() => copyCode(textContent, "CSS")}
              >
                COPY
              </button>
            </div>
          </pre>
          <span className="thanks_text mt-6">
            Thank you for using our glass generator, we hope this makes your job
            easier.
          </span>
          <a href="#" className="modal__close">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Glass;
