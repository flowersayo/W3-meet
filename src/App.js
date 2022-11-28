import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import { LoginPage, MainPage, LandingPage, RegisterPage } from "./pages";

function App() {
  let userId = "flowersayo";
  return (
    <>
      <Background>안녕안녕</Background>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/main/:userId" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;

const Background = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`;
