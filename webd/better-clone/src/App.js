import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MortgageCalculatorPage from "./pages/MortgageCalculatorPage";
import Start from "./pages/Start";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/mortgage-calculator" component={MortgageCalculatorPage} />
        <Route path="/start" component={Start} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
