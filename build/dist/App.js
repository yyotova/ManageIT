import React from "../_snowpack/pkg/react.js";
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route
} from "../_snowpack/pkg/react-router-dom.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Header from "./components/Header.js";
import ManageITThemeProvider from "./components/Theme.js";
import {CurrentUserProvider} from "./contexts/CurrentUser.js";
import Projects from "./pages/Projects.js";
import Dashboard from "./pages/Dashboard.js";
function App() {
  return /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(CurrentUserProvider, null, /* @__PURE__ */ React.createElement(ManageITThemeProvider, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Projects
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/login",
    component: Login
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/signup",
    component: Signup
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/projects",
    component: Projects
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/:id/dashboard",
    component: Dashboard
  }), /* @__PURE__ */ React.createElement(Redirect, {
    to: "/"
  })))));
}
export default App;
