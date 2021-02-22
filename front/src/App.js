import React from "react";
import { Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <div>
      <Route component={HomePage} exact path="/" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
    </div>
  );
};

export default App;
