import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <Container>
      Sidebar
      <Link to="./home">home</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400rem;
  background-color: var(--main);
  height: 100vh;
`;
