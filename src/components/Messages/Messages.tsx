import React from "react";

import "./Messages.scss";

import Calendar from "../../assets/icons/calendar.svg";
import Dropdown from "../../assets/icons/dropdown.svg";

import { ReactComponent as EditIcon } from "../../assets/icons/pencil.svg";

import Title from "../Title/Title";
import Filters from "../Filters/Filters";
import Button from "../Button/Button";
import Pills from "../Pills/Pills";
import DataTable from "../Datatable/Datatable";

function Messages() {
  return (
    <section className="messages">
      <div className="messages__intro">
        <Title>Messages</Title>
        <div className="messages__datepicker">
          <img src={Calendar} alt="calendar" />
          <span>Filter by date</span>
          <p>Mar 24</p>
          <img
            src={Dropdown}
            className="messages__datepicker--dropdown"
            alt="dropdown"
          />
        </div>
      </div>
      <div className="messages__overview">
        <div className="messages__links">
          <a href="#/">Quick sms</a>
          <a href="#/">Bulk uploads</a>
          <a href="#/">Broadcasts</a>
        </div>
        <div className="messages__cta">
          <Filters />
          <Button icon={EditIcon}>Send Bulk sms</Button>
        </div>
        <div className="messages__pills">
          <Pills />
        </div>
        <div className="messages__table">
          <DataTable />
        </div>
      </div>
    </section>
  );
}

export default Messages;
