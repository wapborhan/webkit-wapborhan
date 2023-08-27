import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaBootstrap,
  FaSass,
  FaWordpressSimple,
  FaGithubSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJquery,
  SiVisualstudiocode,
  SiXampp,
  SiAdobepremierepro,
  SiAdobexd,
  SiSketch,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

const SERVICES = [
  {
    name: "Gradient",
    link: "/gradient",
    sub_cat: [
      {
        color: "#ff5722",
        icon: "",
        title: "Gradient Genaretor",
        link: "/gradient-generater",
      },
      {
        color: "#2257ea",
        icon: "",
        title: "Gradient Button",
        link: "/gradient-button",
      },
      {
        color: "#f5d235",
        icon: "",
        title: "Gradient Background",
        link: "/gradient-background",
      },
    ],
  },
  {
    name: "Genaretor",
    link: "/genaretor",
    sub_cat: [
      {
        color: "#ff5722",
        icon: ``,
        title: "Qrcode",
        link: "/qrcode",
      },
    ],
  },
  // {
  //   name: "Playground",
  //   link: "/playground",
  //   sub_cat: [
  //     {
  //       color: "#ff5722",
  //       icon: "",
  //       title: "HTML PlayGround",
  //       link: "/html-playground",
  //     },
  //     {
  //       color: "#2257ea",
  //       icon: "",
  //       title: "CSS PlayGround",
  //       link: "/css-playground",
  //     },
  //     {
  //       color: "#f5d235",
  //       icon: "",
  //       title: "JavaScript PlayGround",
  //       link: "/js-playground",
  //     },
  //   ],
  // },
  // {
  //   name: "Converter",
  //   link: "/converter",
  //   sub_cat: [
  //     {
  //       color: "",
  //       icon: "",
  //       title: "HTML to Markdown",
  //       link: "/html-to-markdown",
  //     },
  //     {
  //       color: "",
  //       icon: "",
  //       title: "Markdown to HTML",
  //     },
  //     {
  //       color: "",
  //       icon: "",
  //       title: "Code to Image",
  //     },
  //   ],
  // },
  {
    name: "Formatter",
    link: "/formatter",
    sub_cat: [
      // {
      //   color: "",
      //   icon: "",
      //   title: "HTML Minify",
      // },
      {
        color: "#1b73ba",
        icon: `fa-brands fa-css3`,
        title: "CSS Minify",
        link: "/cssminify",
      },
      // {
      //   color: "",
      //   icon: "",
      //   title: "Javascript Minify",
      // },
    ],
  },
];

export default SERVICES;
