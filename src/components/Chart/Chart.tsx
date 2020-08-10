import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import { fakeData } from "./Data";

function Chart() {
  return (
    <BarChart width={800} height={300} data={fakeData}>
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Pending" stackId="a" fill="#23b7d9" barSize={5} />
      <Bar dataKey="Failed" stackId="a" fill="#f2a649" barSize={5} />
      <Bar dataKey="Delivered" stackId="a" fill="#d91a2a" barSize={5} />
    </BarChart>
  );
}

export default Chart;
