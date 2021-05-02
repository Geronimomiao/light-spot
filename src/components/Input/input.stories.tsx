import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Input } from "./input";

export default {
  title: "Input",
  component: Input,
} as Meta;

export const ControlledInput = () => {
  const [value, setValue] = useState();
  return (
    <Input
      value={value}
      defaultValue={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export const defaultInput = () => (
  <>
    <Input
      style={{ width: "300px" }}
      placeholder="placeholder"
      onChange={action("changed")}
    />
    <ControlledInput />
  </>
);

export const disabledInput = () => (
  <Input style={{ width: "300px" }} placeholder="disabled input" disabled />
);

export const iconInput = () => (
  <Input
    style={{ width: "300px" }}
    placeholder="input with icon"
    icon="search"
  />
);

export const sizeInput = () => (
  <>
    <Input style={{ width: "300px" }} defaultValue="large size" size="lg" />
    <Input style={{ width: "300px" }} placeholder="small size" size="sm" />
  </>
);

export const pandInput = () => (
  <>
    <Input
      style={{ width: "300px" }}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input style={{ width: "300px" }} defaultValue="google" append=".com" />
  </>
);

