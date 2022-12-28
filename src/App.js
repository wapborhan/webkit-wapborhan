import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./home/Homepage";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
