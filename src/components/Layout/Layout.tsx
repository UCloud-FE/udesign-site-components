import React from "react";
import "./Layout.scss";

export interface LayoutProps {
  name: string;
}

const Layout = (props: LayoutProps) => {
  return <p>{props.name}</p>;
};

export default Layout;