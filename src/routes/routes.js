import HomePage from "../home/Homepage";
import Gradient from "../pages/gradient/Gradient";
import GradientButton from "../pages/button";
import GradientBackground from "../pages/background";
import QrCode from "../pages/qrcode/QrCode";
import CssMinified from "../pages/cssminify/CssMinified";
import ReactGradients from "../pages/background/ReactGradients";

const routes = [
  {
    url: "/",
    component: <HomePage />,
  },
  {
    url: "/gradient-generater",
    component: <Gradient />,
  },
  {
    url: "/gradient-button",
    component: <GradientButton />,
  },
  {
    url: "/gradient-background",
    component: <ReactGradients />,
  },
  {
    url: "/qrcode",
    component: <QrCode />,
  },
  {
    url: "/cssminify",
    component: <CssMinified />,
  },
];
export { routes };
