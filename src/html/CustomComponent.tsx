import React, { ComponentProps } from "react";
import { Greet } from "../components/Greet";

const CustomComponent = (props: ComponentProps<typeof Greet>) => {
  return (
    <div>
      <h2>CustomComponent</h2>

      {props.name}
    </div>
  );
};

export default CustomComponent;
