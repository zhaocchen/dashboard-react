import React from "react";
import logo from "./assets/img/logo.jpg";
import "./assets/css/App.css";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
// import page1 from './pages/page1';
// import routers from "./router";
import { Button } from "antd";
import TestRouter from "@/test/TestRouter";
import TestRedux from "@/test/TestRedux";
import TestReactRedux from "@/test/TestReactRedux";
import ThemeColor from "@/demo/ThemeColor2";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

// const routers =
const token = window.sessionStorage.getItem("token");

function App() {
  return (
    <div className="App">
      <Button>Default</Button>
      {/* <TestRouter></TestRouter> */}
      {/* <TestRedux></TestRedux> */}
      {/* <TestReactRedux></TestReactRedux> */}
      <ThemeColor></ThemeColor>
      {/* <Route path="/home" component={Home} />
      <Route path="/about" component={About} /> */}


      <HashRouter></HashRouter>
    </div>
  );
}

export default App;
