import React from "react";
import { Meta } from "@storybook/react";

import { Image } from "./image";

export default {
  title: "Image",
  component: Image,
} as Meta;

export const imageSize = () => (
  <>
    <div style={{ height: "200px", width: "100%" }}>
      <div style={{ width: "30%", display: "inline-block", marginRight: "5%" }}>
        <Image
          size="1-1"
          src="https://sf3-ttcdn-tos.pstatp.com/img/labis/cb944a81c27be6393ec1321936a4ce88~480x480.JPEG"
        >
          1-1
        </Image>
      </div>
      <div style={{ width: "30%", display: "inline-block", marginRight: "5%" }}>
        <Image
          size="3-2"
          src="https://sf3-ttcdn-tos.pstatp.com/img/labis/cb944a81c27be6393ec1321936a4ce88~480x480.JPEG"
        >
          3-2
        </Image>
      </div>
      <div style={{ width: "30%", display: "inline-block" }}>
        <Image
          size="16-9"
          src="https://sf3-ttcdn-tos.pstatp.com/img/labis/cb944a81c27be6393ec1321936a4ce88~480x480.JPEG"
        >
          16-9
        </Image>
      </div>
    </div>
  </>
);

export const imageResize = () => (
  <>
    <div style={{ height: "300px", width: "100%" }}>
      <div style={{ width: "40%", marginRight: "5%", display: "inline-block" }}>
        <Image
          resize="contain"
          src="https://sf3-ttcdn-tos.pstatp.com/img/labis/05a6bf81f746c057ce39fd056a13caea~480x480.PNG"
        >
          contain
        </Image>
      </div>
      <div style={{ width: "40%", display: "inline-block" }}>
        <Image
          resize="cover"
          src="https://sf3-ttcdn-tos.pstatp.com/img/labis/05a6bf81f746c057ce39fd056a13caea~480x480.PNG"
        >
            cover
        </Image>
      </div>
    </div>
  </>
);
