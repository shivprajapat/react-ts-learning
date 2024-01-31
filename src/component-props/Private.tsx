import React, { ComponentType } from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: ComponentType<ProfileProps>;
};
const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="shiv" />;
  }
  return <Login />;
};

export default Private;
