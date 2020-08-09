import React from "react";

import "./Pills.scss";

import { ReactComponent as SentIcon } from "../../assets/icons/sent.svg";
import { ReactComponent as PendingIcon } from "../../assets/icons/pending.svg";
import { ReactComponent as DeliveredIcon } from "../../assets/icons/delivered.svg";
import { ReactComponent as FailedIcon } from "../../assets/icons/failed.svg";

import Pill from "./Pill/Pill";

function Pills() {
  return (
    <div className="pills">
      <Pill
        icon={SentIcon}
        title="Total Messages Sent"
        color="blue"
        number="5,000"
      />
      <Pill
        icon={DeliveredIcon}
        title="Delivered Messages"
        color="maroon"
        number="3,000"
      />
      <Pill
        icon={FailedIcon}
        color="yellow"
        title="Failed Messages"
        number="1,400"
      />
      <Pill
        icon={PendingIcon}
        color="powderblue"
        title="Pending Messages"
        number="600"
      />
    </div>
  );
}

export default Pills;
