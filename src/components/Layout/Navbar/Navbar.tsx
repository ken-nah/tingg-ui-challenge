import React from "react";

import "./Navbar.scss";

import Search from "../../../assets/icons/search.svg";
import Notifications from "../../../assets/icons/bell.svg";
import Messages from "../../../assets/icons/sms.svg";
import Logout from "../../../assets/icons/logout.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__search">
        <img src={Search} alt="search icon" />
        <input
          type="text"
          name="search"
          placeholder="Search for contact list / groups"
        />
      </div>
      <div className="navbar__cta">
        <Notification image={Notifications} number={4} />
        <Notification image={Messages} number={3} />
        <div className="navbar__logout">
          <span>Log out</span>
          <img src={Logout} alt="logout icon" />
        </div>
      </div>
    </div>
  );
}

interface NotificationProps {
  image: string;
  number: number;
}

const Notification: React.FC<NotificationProps> = (props) => {
  const { image, number } = props;
  return (
    <div className="navbar__notification">
      <img src={image} alt="notifications" />
      <div>
        <span>{number}</span>
      </div>
    </div>
  );
};

export default Navbar;
