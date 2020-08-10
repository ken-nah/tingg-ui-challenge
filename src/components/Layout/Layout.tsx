import React from "react";

import "./Layout.scss";

import ChatIcon from "../../assets/icons/chat.svg";

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
      <main className="layout__maincontent">
        <Chat />
        {props.children}
      </main>
    </div>
  );
};

function Chat() {
  return (
    <div className="layout__chat">
      <img src={ChatIcon} alt="chat icon" />
    </div>
  );
}

export default Layout;
