import React from "react";
import Home from "../../assets/icons/home.svg";
import Bell from "../../assets/icons/bell.svg";
import BookMark from "../../assets/icons/bookmark.svg";
import styled from "styled-components";
import SvgIcon from "../common/SvgIcon";
import { Thin } from "../../styles/font";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const menulist = [
    { name: "Home", src: Home, onClick: () => navigate("./home") },
    {
      name: "Notifications",
      src: Bell,
      onClick: () => navigate("./notifications"),
    },
    {
      name: "Bookmark",
      src: BookMark,
      onClick: () => navigate("./bookmark"),
    },
  ];

  return (
    <MenuContainer>
      {menulist.map((menu) => {
        return <MenuItem key={menu.name} menu={menu} onClick={menu.onClick} />;
      })}
    </MenuContainer>
  );
}

function MenuItem({ menu }) {
  return (
    <MenuWrapper onClick={menu.onClick}>
      <SvgIcon src={menu.src} size={"24px"} />
      <TextContainer>
        <Thin size={"18px"} color={"white"}>
          {menu.name}
        </Thin>
      </TextContainer>
    </MenuWrapper>
  );
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 10px;
  flex: 1;
`;
const MenuWrapper = styled.div.attrs(({ onClick }) => ({
  onClick: onClick,
}))`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-top: 10rem;

  &:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }
`;
