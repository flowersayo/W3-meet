import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <Container>
      <Link to="./when">When</Link>
      <Link to="./why">Why</Link>
      <Link to="./what">What</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--w100);
  height: 70px;
`;
