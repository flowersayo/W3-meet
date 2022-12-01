import React from "react";
import styled from "styled-components";

import * as Icons from "../../assets";

const SvgIcon = ({ src, size, color }) => {
  return (
    <IconContainer size={size}>
      <img src={src} width={size} height={size} />
    </IconContainer>
  );
};

export default SvgIcon;

const IconContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.size ? props.size : "24px")};
  width: ${(props) => (props.size ? props.size : "24px")};
`;
