import { Fragment, Component } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./home/Homepage";
import NotFound from "./components/NotFound";
//
import DATA from "./assets/data/allservices.json";

export default class App extends Component {
  state = {
    data: DATA,
  };

  // componentDidMount() {
  //   axios
  //     .get("https://webkit-8ac2e-default-rtdb.firebaseio.com/services.json")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    // console.log(this.state.data.services);
    return (
      <Fragment>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={<Homepage data={this.state.data.services} />}
          />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}
