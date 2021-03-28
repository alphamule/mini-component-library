/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const styles = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};
const ProgressBar = ({ value, size }) => {
  const style = styles[size];

  return (
    <Wrapper
      style={{
        "--padding": style.padding + "px",
        "--radius": style.radius + "px",
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Mask>
        <Bar
          style={{
            "--width": value + "%",
            "--height": style.height + "px",
          }}
        />
      </Mask>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 16px;
  width: var(--width);
  height: var(--height);
`;

const Mask = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

export default ProgressBar;
