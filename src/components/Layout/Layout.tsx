import React from "react";

import "./Layout.scss";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <div className="layout">
      <nav className="layout__navbar">
        <Navbar />
      </nav>
      <aside className="layout__sidebar">
        <span>
          <Sidebar />
        </span>
      </aside>
      <main className="layout__maincontent">{props.children}</main>
    </div>
  );
};

export default Layout;
