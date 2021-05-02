import React from "react";
import { Meta } from "@storybook/react";

import { Icon } from "./icon";

export default {
  title: "Icon",
  component: Icon,
} as Meta;

export const themeIcon = () => (
  <>
    <Icon icon="bookmark" theme="primary" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="bookmark" theme="secondary" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="bookmark" theme="success" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="bookmark" theme="info" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="bookmark" theme="warning" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="bookmark" theme="danger" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="bookmark" theme="light" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="bookmark" theme="dark" size="lg" />
  </>
);

export const sizeIcon = () => (
  <>
    <Icon icon="coffee" theme="primary" size="xs" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="coffee" theme="secondary" size="2x" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="coffee" theme="success" size="4x" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="coffee" theme="info" size="6x" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="coffee" theme="warning" size="8x" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="coffee" theme="dark" size="10x" />
    <span style={{ padding: "10px" }}></span>
  </>
);

export const directionIcon = () => (
  <>
    <Icon icon="angle-down" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="angle-left" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="angle-right" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="angle-up" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="angle-double-down" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="angle-double-left" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="angle-double-right" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="angle-double-up" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
  </>
);

export const arrowIcon = () => (
  <>
    <Icon icon="arrow-down" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="arrow-left" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="arrow-right" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="arrow-up" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="caret-down" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="caret-left" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="caret-right" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="caret-up" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
  </>
);

export const specialIcon = () => (
  <>
    <Icon icon="exchange-alt" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="ellipsis-h" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="ellipsis-v" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="expand" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="expand-alt" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="expand-arrows-alt" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="compress" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="compress-alt" theme="dark" size="lg" />
    <span style={{ padding: "10px" }}></span>
    <Icon icon="compress-arrows-alt" theme="dark" size="lg" />
  </>
);
