import React from "react";
import { users, User } from "./Data";

import "./Datatable.scss";

import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";

import DownArrow from "../../assets/icons/down arrow.svg";
import RightArrow from "../../assets/icons/right-arrow.svg";
import LeftArrow from "../../assets/icons/left arrow.svg";

const DataTable: React.FC = () => {
  return (
    <React.Fragment>
      <div className="datatable">
        <table>
          <thead>
            <tr>
              <th>Message</th>
              <th>Shortcode</th>
              <th>Status</th>
              <th>Created By</th>
              <th>Send Time</th>
              <th>Schedule Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{users.map(TableRow)}</tbody>
        </table>
      </div>
      <div className="pagination">
        <p>Show rows: </p>
        <div className="pagination__rows">
          <span>25</span>
          <img src={DownArrow} alt="down arrow" />
        </div>
        <p>Go to: </p>
        <div className="pagination__pages">
          <input type="text" placeholder="100" />
        </div>
        <p>1 - 25 of 522</p>
        <div className="pagination__buttons">
          <img src={LeftArrow} alt="left arrow" />
          <img src={RightArrow} alt="right arrow" />
        </div>
      </div>
    </React.Fragment>
  );
};

const TableRow: React.FC<User> = (row) => {
  return (
    <tr key={row.id}>
      <td>{row.message}</td>
      <td>{row.shortcode}</td>
      <td>{row.status}</td>
      <td>{row.createdby}</td>
      <td>{row.sendtime}</td>
      <td>{row.scheduletime}</td>
      <td>
        <EditIcon />
      </td>
    </tr>
  );
};

export default DataTable;
