import React from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/icons/logo.svg";

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={LogoSrc} />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;

  justify-content: flex-start;
  align-items: center;
`;

const LogoImage = styled.img.attrs({
  src: LogoSrc,
})``;
