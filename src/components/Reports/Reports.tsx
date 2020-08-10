import React from "react";

import "./Reports.scss";

import { ReactComponent as SentIcon } from "../../assets/icons/sent.svg";
import { ReactComponent as PendingIcon } from "../../assets/icons/pending.svg";
import { ReactComponent as DeliveredIcon } from "../../assets/icons/delivered.svg";
import { ReactComponent as FailedIcon } from "../../assets/icons/failed.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";

import DownArrow from "../../assets/icons/down-arrow.svg";

import Title from "../Title/Title";
import Pill from "../Pills/Pill/Pill";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Chart from "../Chart/Chart";

function Reports() {
  return (
    <section className="reports">
      <Title>Welcome Alice Wambui!</Title>
      <p>Here is what has been happening in the last 7 days.</p>
      <div className="reports__metadata">
        <Pill
          icon={SentIcon}
          title="Total Messages Sent"
          color="blue"
          number="5,000"
          whiteBackground
        />
        <Pill
          icon={DeliveredIcon}
          title="Delivered Messages"
          color="maroon"
          number="3,000"
          whiteBackground
        />
        <Pill
          icon={FailedIcon}
          color="yellow"
          title="Failed Messages"
          number="1,400"
          whiteBackground
        />
        <Pill
          icon={PendingIcon}
          color="powderblue"
          title="Pending Messages"
          number="600"
          whiteBackground
        />
      </div>
      <div className="reports__stats">
        <Card>
          <h3 className="title">Credit Balance</h3>
          <div className="reports__credit">
            <div className="reports__credit--wallet">
              <WalletIcon />
            </div>
            <p>200, 000</p>
            <span>Available balance</span>
            <Button>Buy Bundles</Button>
          </div>
        </Card>
        <Card>
          <div className="reports__graph">
            <div className="reports__graph--intro">
              <h3 className="title">Reports</h3>
              <span>Total sms sent per transaction</span>
              <div className="reports__monthpicker">
                <CalendarIcon />
                <p>Month</p>
                <img src={DownArrow} alt="down arrow" />
              </div>
            </div>
            <div className="reports__graph--chart">
              <Chart />
            </div>
            <div className="reports__labels">
              <Label color="maroon" title="Delivered messages" />
              <Label color="yellow" title="Failed messages" />
              <Label color="blue" title="Pending messages" />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

interface LabelProps {
  color: "maroon" | "blue" | "yellow";
  title: string;
}

const Label: React.FC<LabelProps> = (props) => {
  const { color, title } = props;

  return (
    <div className="label">
      <div className={`label__indicator label__indicator--${color}`}>
        <div className={`label__value label__value--${color}`}></div>
      </div>
      <span>{title}</span>
    </div>
  );
};

export default Reports;
