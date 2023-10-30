import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";

import NavBar from "./Layout/Navbar";

import Footer from "./Layout/Footer";
import ShopAll from "./Pages/ShopAll";
import GrandBend from "./Pages/GrandBend";
import FawnIsland from "./Pages/FawnIsland";
import WasagaBeach from "./Pages/WasagaBeach";
import ViewAll from "./Pages/ViewAll";
import Hoodies from "./Pages/Hoodies";
import TShirts from "./Pages/TShirts";
import YouthTShirts from "./Pages/YouthTShirts";
import YouthHoodies from "./Pages/YouthHoodies";
import SingleProduct from "./Components/SingleProduct";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const App = () => {
  return (
    <div style={{ fontFamily: "Young Serif serif" }}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleproduct/:id/:id" element={<SingleProduct />} />

          <Route path="/shopall" element={<ShopAll />} />

          <Route path="/grandbend" element={<GrandBend />} />
          <Route path="/fawnisland" element={<FawnIsland />} />
          <Route path="/wasagabeach" element={<WasagaBeach />} />
          <Route path="/viewall" element={<ViewAll />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/tshirts" element={<TShirts />} />
          <Route path="/youthtshirts" element={<YouthTShirts />} />
          <Route path="/youthtshirts" element={<YouthTShirts />} />
          <Route path="/youthhoodies" element={<YouthHoodies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
