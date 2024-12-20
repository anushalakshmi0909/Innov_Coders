import React from "react";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = ({ children, setIsLoggedIn }) => {
  return (
    <div className="layout">
      <Sidebar setIsLoggedIn={setIsLoggedIn} />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
