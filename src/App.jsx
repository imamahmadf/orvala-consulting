import { BrowserRouter, Route, Switch } from "react-router-dom";
// import AdminRoute from "./Components/Admin/AdminRoute";
// import Loading from "./Components/Loading";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Career from "./Pages/Career";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavbarDestop from "./Components/NavbarDestop";
import Footer from "./Components/Footer";
import TesNavbar from "./Components/tesNavbar";
import MainServices from "./Pages/MainServices";

function App() {
  return (
    <BrowserRouter>
      <NavbarDestop />
      {/* <TesNavbar /> */}
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Career} path="/careers" exact />
        <Route component={About} path="/about-us" exact />
        <Route component={Contact} path="/contact" exact />
        <Route component={MainServices} path="/main-services" exact />
        <Route component={NotFound} path="*" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
