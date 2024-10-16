"use client";
import { useEffect } from "react";

const Glass = () => {
  useEffect(() => {
    const hero = document.getElementById("hero");
    const hex = document.getElementById("input_hexColor");
    const rgb = document.getElementById("input_rgbColor");
    const glass_box = document.querySelector(".glass-container");

    const controls_container = document.querySelector(".controls__inputs");
    const input_border_radius = document.getElementById("input_radius");
    const input_blur = document.getElementById("input_blur");
    const input_border = document.getElementById("input_border");
    const input_opacity = document.getElementById("input_opacity");
    const input_background = document.getElementById("bgInput");

    const btnSwitch_image = document.querySelector("#switch_image");
    const btnSwitch_text = document.querySelector("#switch_text");

    var bgNumber = getRandomNum(1, 5);

    /* --- ASIGNACION DE VALORES POR DEFAULT EN EL GLASS BOX --- */
    hero.style.setProperty(
      "background-image",
      `url("/images/bg-default-0${bgNumber}.jpg")`
    );
    glass_box.style.setProperty("backdrop-filter", `blur(8px)`);
    glass_box.style.setProperty("background-color", `rgba(0, 191, 255, 0.025)`);
    glass_box.style.setProperty("box-shadow", `2px 8px 8px rgba(0,0,0,0.3)`);
    glass_box.style.setProperty("border", `2px rgba(255,255,255,0.4) solid`);
    glass_box.style.setProperty(
      "border-bottom",
      `2px rgba(40,40,40,0.35) solid`
    );
    glass_box.style.setProperty(
      "border-right",
      `2px rgba(40,40,40,0.35) solid`
    );

    /* --- SINCRONIZACION DE DATOS ENTRE DOM Y JS --- */
    // con esto sincronizamos los valores de los Range Inputs
    // junto con los valores previamente establecidos al glass box.
    input_opacity.value = "75";
    document.getElementById("opacity_data").textContent =
      `${parseInt(input_opacity.value) / 1000}`;

    input_border_radius.value = "10";
    document.getElementById("radius_data").textContent =
      `${input_border_radius.value}px`;

    input_blur.value = "5";
    document.getElementById("blur_data").textContent = `${input_blur.value}px`;

    input_border.value = "2";
    document.getElementById("border_data").textContent =
      `${input_border.value}px`;

    /* --- EVENTO CONTROLADOR DE INPUTS --- */
    controls_container.addEventListener("input", () => {
      /* --- OPACITY INPUT RANGO --- */
      glass_box.style.setProperty(
        "background-color",
        `rgba(${hex2rgb()} ${parseInt(input_opacity.value) / 1000})`
      );
      document.getElementById("opacity_data").textContent =
        `${input_opacity.value / 1000}`;

      /* --- BLUR INPUT RANGO --- */
      glass_box.style.setProperty(
        "backdrop-filter",
        `blur(${input_blur.value}px)`
      );
      document.getElementById("blur_data").textContent =
        `${input_blur.value}px`;

      /* --- BORDER INPUT RANGO --- */
      glass_box.style.setProperty(
        "border",
        `${input_border.value}px rgba(255,255,255,0.4) solid`
      );
      glass_box.style.setProperty(
        "border-bottom",
        `${input_border.value}px rgba(40,40,40,0.35) solid`
      );
      glass_box.style.setProperty(
        "border-right",
        `${input_border.value}px rgba(40,40,40,0.35) solid`
      );
      document.getElementById("border_data").textContent =
        `${input_border.value}px`;

      /* --- BORDER RADIUS INPUT RANGO --- */
      glass_box.style.setProperty(
        "border-radius",
        `${input_border_radius.value}px`
      );
      document.getElementById("radius_data").textContent =
        `${input_border_radius.value}px`;
    });

    /* --- EVENTO BACKGROUND INPUT --- */
    input_background.addEventListener("input", () => {
      hero.style.setProperty(
        "background-image",
        `url("${input_background.value}")`
      );
    });

    /* --- EVENTO SELECTOR DE TEXTO EN BACKGROUND INPUT --- */
    input_background.addEventListener("click", () => {
      document.getElementById("bgInput").select();
    });

    /* --- EVENTO HEX INPUT --- */
    hex.addEventListener("input", () => {
      glass_box.style.setProperty(
        "background-color",
        `rgba(${hex2rgb()} ${input_opacity.value / 1000}`
      );
      rgb.value = `${hex.value}`;
      input_opacity;
    });

    /* --- EVENTO RGB INPUT --- */
    rgb.addEventListener("input", () => {
      hex.value = `${rgb.value}`;
      glass_box.style.setProperty(
        "background-color",
        `rgba(${hex2rgb()} ${parseInt(input_opacity.value) / 1000})`
      );
    });

    /* ---INTERACCION DE BOTONES SWITCH--- */
    btnSwitch_image.addEventListener("click", () => {
      btnSwitch_image.classList.toggle("active__image");
      document
        .querySelector("#profile")
        .classList.toggle("visibility__profile");
      console.log("me opimiste - opresor >:v");
    });

    btnSwitch_text.addEventListener("click", () => {
      btnSwitch_text.classList.toggle("active__text");
      document.querySelector("#text").classList.toggle("visibility__text");
      console.log("me opimiste de nuevo- opresor >:v");
    });

    /* --- CODE GENERATOR --- */
    document
      .querySelector(".generator_button")
      .addEventListener("click", () => {
        document.querySelector(".code_text").textContent =
          `<!-- This was made with GlassGenerator.netlify.app -->
    <div class="glass-container" id="glass"></div>`;
        document.querySelector("#code_text2").textContent =
          `/* This was made with GlassGenerator.netlify.app */ \n
    .glass-container{
        width: 700px;
        height: 375px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border-radius: ${input_border_radius.value}px;
        backdrop-filter: blur(${input_blur.value}px);
        background-color: rgba(${hex2rgb()} ${parseInt(input_opacity.value) / 1000});
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
        border: ${input_border.value}px rgba(255,255,255,0.4) solid;
        border-bottom: ${input_border.value}px rgba(40,40,40,0.35) solid;
        border-right: ${input_border.value}px rgba(40,40,40,0.35) solid;
    }`;
      });

    /* --- EVENTOS ENCARGADOS DEL BOTON COPY/PASTE --- */
    document.getElementById("copy_buttonHTML").addEventListener("click", () => {
      copyToClipboard("code_text1");
    });

    document.getElementById("copy_buttonCSS").addEventListener("click", () => {
      copyToClipboard("code_text2");
    });

    /* --- CONTROLES DE BACKGROUNDS --- */
    arrow_right.onclick = handler;
    arrow_left.onclick = handler;

    // ---- --------- ----
    // ---- FUNCIONES ----
    // ---- --------- ----

    var copina = (document.querySelector("#code_text2").textContent =
      `/* This was made with GlassGenerator.netlify.app */ \n
    .glass-container{
        width: 700px;
        height: 375px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border-radius: ${input_border_radius.value}px;
        backdrop-filter: blur(${input_blur.value}px);
        background-color: rgba(${hex2rgb()} ${parseInt(input_opacity.value) / 1000});
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
        border: ${input_border.value}px rgba(255,255,255,0.4) solid;
        border-bottom: ${input_border.value}px rgba(40,40,40,0.35) solid;
        border-right: ${input_border.value}px rgba(40,40,40,0.35) solid;
    }`);

    /* --- FUNCION CONTROLADORA DE BACKGROUND  --- */
    function handler() {
      // Ejecutamos un operador ternario sin importar cual flecha es clikeada
      // y si cumple la condicion le sumamos 1 a la variable
      // de lo contrario lo retornamos a su valor original.
      bgNumber < 4
        ? bgNumber++ + console.log(bgNumber)
        : (bgNumber = 1) + console.log(bgNumber);
      hero.style.setProperty(
        "background-image",
        `url("assets/images/bg-default-0${bgNumber}.jpg")`
      );
    }

    /* --- FUNCION Generadora de Numero Entero Aleatorio --- */
    function getRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    /* --- FUNCION QUE CONVIERTE EL COLOR HEX A RGB --- */
    function hex2rgb() {
      var hex_color = document.getElementById("input_hexColor").value;
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

    /* --- FUNCION BOTON DE COPY/PASTE --- */

    function copyToClipboard(x) {
      const str = document.getElementById(x).innerText;
      const el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  }, []);

  return (
    <div>
      <section class="hero" id="hero">
        <figure
          class="arrows left"
          id="arrow_left"
          title="Change background"
        ></figure>
        <div class="glass-container" id="glass">
          <figure class="glass-container__profile" id="profile"></figure>
          <div class="glass-container__text" id="text">
            <h2 id="glass_title">Glass Morphism</h2>
            <p id="lorem_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
          </div>
        </div>
        <figure
          class="arrows right"
          id="arrow_right"
          title="Change background"
        ></figure>
      </section>
      <section class="controls-section">
        <div class="controls-container">
          <div class="controls__inputs">
            <div class="control__input-info">
              <p>Opacity</p>
              <div class="range_data">
                <span class="range_data--text">-</span>
                <span class="range_data--text" id="opacity_data">
                  08
                </span>
                <span class="range_data--text">+</span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value="75"
                class="slider"
                id="input_opacity"
              />
            </div>

            <div class="control__input-info">
              <p>Blur</p>
              <div class="range_data">
                <span class="range_data--text">-</span>
                <span class="range_data--text" id="blur_data">
                  08
                </span>
                <span class="range_data--text">+</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value="4"
                class="slider"
                id="input_blur"
              />
            </div>

            <div class="control__input-info">
              <p>Border</p>
              <div class="range_data">
                <span class="range_data--text">-</span>
                <span class="range_data--text" id="border_data">
                  08
                </span>
                <span class="range_data--text">+</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value="2"
                class="slider"
                id="input_border"
              />
            </div>

            <div class="control__input-info">
              <p>Border Radius</p>
              <div class="range_data">
                <span class="range_data--text">-</span>
                <span class="range_data--text" id="radius_data">
                  08
                </span>
                <span class="range_data--text">+</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value="10"
                class="slider"
                id="input_radius"
              />
            </div>

            <div class="control__input-info">
              <p>Backgroung Image</p>
              <input
                type="text"
                class="slider"
                placeholder="type here the image url"
                id="bgInput"
              />
            </div>

            <div class="control__input-info">
              <p>Glass Color</p>
              <div class="glass_color_container">
                <input
                  type="color"
                  value="#00BFFF"
                  class="visual_color_input"
                  id="input_rgbColor"
                />
                <input
                  type="text"
                  value="#00BFFF"
                  class="text_input_color"
                  id="input_hexColor"
                />
              </div>
            </div>
          </div>

          {/* <!-- SWITCH'S BUTTONS --> */}
          <div class="switchs">
            <div class="container__button-switch">
              <span class="switch_name">Image</span>
              <button class="switch" id="switch_image">
                <span>OFF</span>
                <span>ON</span>
              </button>
            </div>
            <div class="container__button-switch">
              <span class="switch_name">Text</span>
              <button class="switch" id="switch_text">
                <span>OFF</span>
                <span>ON</span>
              </button>
            </div>
          </div>

          {/* <!-- MODAL CONTAINER --> */}
          <a
            href="#demo-modal"
            class="generator_button"
            title="Generate the code"
          >
            <div class="generator_button--uptext">
              <span class="generator_button--codetext">&lt;glass&gt;</span>
              <span class="text02">CODE</span>
              <span class="generator_button--codetext">&lt;/glass&gt;</span>
            </div>
            <span class="text01">GENERATOR</span>
          </a>
          {/* <!-- </button> --> */}
        </div>
      </section>
      <div id="demo-modal" class="modal">
        <div class="modal__content">
          <span class="code_title">HTML</span>
          <pre>
            <div class="button_container">
              <code class="code_text" id="code_text1"></code>
              <button class="button_copy" id="copy_buttonHTML">
                COPY
              </button>
            </div>
          </pre>
          <span class="code_title">CSS</span>
          <pre>
            <div class="button_container">
              <code class="code_text" id="code_text2"></code>
              <button class="button_copy" id="copy_buttonCSS">
                COPY
              </button>
            </div>
          </pre>
          <span class="thanks_text">
            Thank you for using our glass generator, we hope this makes your job
            easier.{" "}
          </span>
          <a href="#" class="modal__close">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Glass;
