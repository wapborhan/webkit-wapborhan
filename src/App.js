import { Fragment, Component } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./home/Homepage";
import NotFound from "./components/NotFound";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}
