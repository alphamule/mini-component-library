import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  small: {
    height: 20,
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
  },
  large: {
    height: 30,
    fontSize: 18,
    iconSize: 24,
    borderThickness: 3,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const style = styles[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": style.iconSize }}>
        <Icon id={icon} size={style.iconSize + "px"} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": style.height / 16 + "rem",
          "--border-thickness": style.borderThickness + "px",
          "--font-size": style.fontSize + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
