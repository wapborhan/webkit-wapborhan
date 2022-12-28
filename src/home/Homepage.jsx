import React from "react";
import Banner from "./Banner";
import Services from "./Services";

function Homepage(props) {
  return (
    <div>
      <Banner />
      <Services data={props.data} />
    </div>
  );
}
export default Homepage;
