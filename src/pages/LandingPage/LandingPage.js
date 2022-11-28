import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LandingPage() {
  return (
    <Background>
      LandingPage
      <Link to={"./login"}>Login</Link>
      <Link to={"./register"}>Register</Link>
    </Background>
  );
}
const Background = styled.div`
  width: 100%;
  height: 100%;
`;
