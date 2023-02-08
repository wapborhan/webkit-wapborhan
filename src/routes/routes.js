import HomePage from "../home/Homepage";
import Gradient from "../pages/gradient/Gradient";
import GradientButton from "../pages/button";
import GradientBackground from "../pages/background";

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
    component: <GradientBackground />,
  },
];
export { routes };
