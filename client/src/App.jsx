import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";

import Research from "./pages/Research";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/news" component={News} />
        <Route exact path="/news/:id" component={NewsDetails} />
        <Redirect to="/" />
      </Switch>

      {/* <Footer /> */}
    </>
  );
}

export default App;
