import { Fragment, Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { routes } from "./routes/routes";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Routes>
          {routes.map((data, i) => (
            <Route
              key={i}
              exact
              path={`/${data.url}`}
              element={data.component}
            />
          ))}
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}
