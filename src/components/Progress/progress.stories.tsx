import React from "react";
import { Meta } from "@storybook/react";

import { Progress } from "./progress";

export default {
  title: "Progress",
  component: Progress,
} as Meta;

export const themeProgress = () => (
  <div style={{ width: "400px" }}>
    <Progress percent={10} theme="primary" strokeHeight={20} />
    <span style={{ padding: "10px" }}></span>
    <Progress percent={20} theme="secondary" strokeHeight={20} />
    <span style={{ padding: "10px" }}></span>
    <Progress percent={30} theme="success" strokeHeight={20} />
    <span style={{ padding: "10px" }}></span>
    <Progress percent={50} theme="info" strokeHeight={20} />
    <span style={{ padding: "10px" }}></span>
    <Progress percent={60} theme="warning" strokeHeight={20} />
    <span style={{ padding: "10px" }}></span>
    <Progress percent={70} theme="dark" strokeHeight={20} />
    <span style={{ padding: "10px" }}></span>
  </div>
);
