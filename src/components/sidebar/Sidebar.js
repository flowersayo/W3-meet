import React from "react";
import styled from "styled-components";

import SizedBox from "../common/SizedBox";
import Menu from "./Menu";
import Logo from "./Logo";
import HomeSrc from "../../assets/icons/home.svg";

export default function Sidebar() {
  return (
    <Container>
      <Logo />
      <SizedBox height={50} />

      <Menu />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400rem;
  background-color: var(--main);
  height: 100vh;
  padding: 20rem;
  padding-top: 30rem;
`;
