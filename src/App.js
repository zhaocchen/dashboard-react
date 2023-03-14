import React from "react";
import logo from "./assets/img/logo.jpg";
import "./assets/css/App.css";
import { HashRouter, Switch, BrowserRouter, Route, Redirect, Link } from "react-router-dom";
// import page1 from './pages/page1';
// import routers from "./router";

import ThemeColor from "@/demo/ThemeColor2";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Hooks from "./pages/Hooks";
import About from "./pages/About";
import Login from "./pages/Login";

// const routers =
const token = window.sessionStorage.getItem("token");

function App() {
  return (
    <BrowserRouter className="App" basename="/">
      <ThemeColor></ThemeColor>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
      
      <Route path="/home" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/hooks" component={Hooks} />
      <Route path="/about" component={About} />

      {/* <Route
        exact
        path="/"
        render={() => (
          <div>
            <h1>Welcome</h1>
          </div>
        )}
      /> */}
    </BrowserRouter>
  );
}

export default App;
