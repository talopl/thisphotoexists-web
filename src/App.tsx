import React from "react";
import { AuthProvider } from "./components/auth/AuthProvider/AuthProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute/PrivateRoute";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <AuthProvider>
      <Route>
        <Switch>
          <PrivateRoute path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Route>
    </AuthProvider>
  );
}

export default App;
