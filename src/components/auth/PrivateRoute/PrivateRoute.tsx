import React, { Component, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ component, ...rest }: any) => {
  const user = useContext(AuthContext);

  const RouteComponent = (props: any) =>
    !!user ? React.createElement(component, props) : <Redirect to="/login" />;

  return <Route {...rest} render={RouteComponent} />;
};
