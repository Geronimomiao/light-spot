import React, { useState } from "react";
import { Meta } from "@storybook/react";

import { Transition } from "./transition";
import  Button from "../Button";

export default {
  title: "Transition",
  component: Transition,
} as Meta;


export const ZoomInTop = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        ZoomInTop
      </Button>
      <Transition animation="zoom-in-top" in={show} timeout={3000}>
        <div>this is a zoom-in-top</div>
      </Transition>
    </div>
  );
};

export const ZoomInLeft = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        ZoomInLeft
      </Button>
      <Transition animation="zoom-in-left" in={show} timeout={3000}>
        <div>this is a zoom-in-left</div>
      </Transition>
    </div>
  );
};

export const ZoomInRight = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        ZoomInRight
      </Button>
      <Transition animation="zoom-in-right" in={show} timeout={3000}>
        <div>this is a zoom-in-right</div>
      </Transition>
    </div>
  );
};

export const ZoomInBottom = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button btnType="primary" onClick={() => setShow(!show)}>
        ZoomInBottom
      </Button>
      <Transition animation="zoom-in-bottom" in={show} timeout={3000}>
        <div>this is a zoom-in-bottom</div>
      </Transition>
    </div>
  );
};
