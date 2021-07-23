import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Footer from "./components/Footer";
import Contact from "./pages/Contact.js"
function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
        <Switch>
          {/* <Route exact path="/contact" component={Contact} />*/}
          <Route exact path="/contact">
<Contact />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
