import React from "react";
import './Layout.css';

export const Layout = ({ children }) => {
  return <div className="container-fluid layout">{children}</div>;
};
