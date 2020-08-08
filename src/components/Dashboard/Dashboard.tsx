import React from "react";

import "./Dashboard.scss";

import Illustrationone from "../../assets/images/sms.png";
import Illustrationtwo from "../../assets/images/contact.png";
import Illustrationthree from "../../assets/images/credit.png";

import Title from "../Title/Title";
import Card from "../Card/Card";
import Button from "../Button/Button";

function Dashboard() {
  return (
    <React.Fragment>
      <Title>Welcome Alice Wambui!</Title>
      <p>Get familiar with the dashboard. Here are some ways to get started</p>
      <div className="overview">
        <Card>
          <h3 className="title">Send Messages</h3>
          <div className="overview__sms">
            <div className="overview__sms--description">
              <p>Start sending tailored messages to your customers</p>
              <Button>Send your first sms</Button>
            </div>
            <img src={Illustrationone} alt="people talking" />
          </div>
        </Card>
        <Card>
          <h3 className="title">Add Contacts Lists</h3>
          <div className="overview__contact">
            <img src={Illustrationtwo} alt="person texting" />
            <p>
              Easily add contact lists or groups and start sending messages to
              your customer
            </p>
            <Button>Add contact list</Button>
          </div>
        </Card>
        <Card>
          <h3 className="title">Top up credit</h3>
          <div className="overview__credit">
            <div className="overview__credit--description">
              <p>
                Easily top up your credit bundle balance and start sending
                messages to your customers
              </p>
              <Button>Topup credit</Button>
            </div>
            <img src={Illustrationthree} alt="credit icon" />
          </div>
        </Card>
        <Card>
          <div className="overview__balance">
            <h3 className="title">Credit balance</h3>
            <p>200,000</p>
            <span>Available credit balance</span>
            <Button>Buy bundles</Button>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
