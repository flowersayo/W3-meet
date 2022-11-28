import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import { LoginPage, MainPage, LandingPage, RegisterPage } from "./pages";

function App() {
  let userId = "flowersayo";
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/main/*" element={<MainPage />} />
    </Routes>
  );
}

export default App;
