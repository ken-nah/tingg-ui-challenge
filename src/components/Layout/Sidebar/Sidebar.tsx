import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

import Logo from "../../../assets/images/cellulant.png";
import Dstv from "../../../assets/images/logo_dstv_light.png";

import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboard.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/new-envelope.svg";
import { ReactComponent as ContactIcon } from "../../../assets/icons/add-contact.svg";
import { ReactComponent as AccountIcon } from "../../../assets/icons/wallet.svg";
import { ReactComponent as CreditIcon } from "../../../assets/icons/pay.svg";
import { ReactComponent as ReportsIcon } from "../../../assets/icons/statistics.svg";
import { ReactComponent as MailIcon } from "../../../assets/icons/at.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={Logo} alt="logo" />
        <span>life is mobile</span>
      </div>
      <ul className="sidebar__menu">
        <MenuItem icon={DashboardIcon} path="/dashboard" text="Dashboard" />
        <MenuItem icon={ReportsIcon} path="/reports" text="Reports" />
        <MenuItem icon={MessageIcon} path="/messages" text="Messages" />
        <MenuItem icon={ContactIcon} path="/contact" text="Contacts" />
        <MenuItem icon={CreditIcon} path="/credit" text="Accounts" />
        <MenuItem icon={AccountIcon} path="/account" text="Credits" />
        <MenuItem icon={MailIcon} path="/mail" text="Contact us" />
      </ul>
      <div className="sidebar__dstv">
        <img src={Dstv} alt="dstv icon" />
        <div className="sidebar__dstv--title">
          <p>Dstv</p>
          <span>info@dstv.co.ke</span>
        </div>
      </div>
    </div>
  );
}

interface MenuItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { icon: Icon, path, text } = props;
  return (
    <li>
      <NavLink to={path} activeClassName="active">
        {text}
      </NavLink>
      <Icon />
    </li>
  );
};

export default Sidebar;
