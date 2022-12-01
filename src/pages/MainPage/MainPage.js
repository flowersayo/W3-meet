import React from "react";
import { Sidebar } from "../../components";
import { Route, Routes } from "react-router-dom";
import WhatPage from "./WhatPage/WhatPage";
import WhyPage from "./WhyPage/WhyPage";
import WhenPage from "./WhenPage/WhenPage";
import UserHomePage from "./UserHomePage/UserHomePage";
import NotificationPage from "./UserHomePage/NotificationPage";
import BookMarkPage from "./UserHomePage/BookMarkPage";
import styled from "styled-components";
import { NavBar } from "../../components";
export default function MainPage() {
  return (
    <Wrapper>
      <Sidebar />
      <InnerBox>
        <NavBar />
        <Routes>
          <Route path="what" element={<WhatPage />} />
          <Route path="why" element={<WhyPage />} />
          <Route path="when" element={<WhenPage />} />
          <Route path="home" element={<UserHomePage />} />
          <Route path="bookmark" element={<BookMarkPage />} />
          <Route path="notifications" element={<NotificationPage />} />
        </Routes>
      </InnerBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /*사이드바 제외한 나머지 영역*/
`;
