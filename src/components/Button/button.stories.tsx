import React from "react";
import { Meta } from "@storybook/react";

import { Button } from "./button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

export const defaultButton = () => <Button> default button </Button>;

export const buttonWithSize = () => (
  <>
    <Button size="sm"> small button </Button>
    <div style={{ padding: "10px" }}></div>
    <Button size="lg"> large button </Button>
  </>
);

export const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <div style={{ padding: "10px" }}></div>
    <Button btnType="danger"> danger button </Button>
    <div style={{ padding: "10px" }}></div>
    <Button btnType="link" href="https://google.com">
      {" "}
      link button{" "}
    </Button>
  </>
);
