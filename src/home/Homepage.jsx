import React from "react";
import BackToTop from "../components/BackToTop";
import Banner from "./Banner";
import Services from "./Services";

function Homepage() {
  return (
    <div>
      <Banner />
      <Services />
      <BackToTop />
    </div>
  );
}
export default Homepage;
