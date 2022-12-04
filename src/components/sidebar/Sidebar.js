import React, { useState } from "react";
import styled from "styled-components";

import SizedBox from "../common/SizedBox";
import Menu from "./Menu";
import Logo from "./Logo";
import HomeSrc from "../../assets/icons/home.svg";
import Group from "./Group";
import NestedList from "./NestedList";
import { Thin } from "../../styles/font";
import SvgIcon from "../common/SvgIcon";
import { Plus } from "../../assets";

const Square = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ color }) => (color ? color : "white")};
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  background-color: ${({ color }) => (color ? color : "white")};
`;

export default function Sidebar() {
  const [items, setItems] = useState([
    {
      name: "KaKao",
      label: "KaKao",
      icon: <Square color={"#2BF4F4"} />,
      items: [
        {
          name: "Marketing",
          label: "Marketing",
          icon: <Circle color={"#2BF4F4"} />,
        },
        { name: "Design", label: "Design", icon: <Circle color={"#F03D93"} /> },
        {
          name: "Development",
          label: "Design",
          icon: <Circle color={"#4B0CFF"} />,
        },
        {
          name: "AddGroup",
          label: "AddGroup",
          icon: <SvgIcon src={Plus} size={"25px"} />,
        },
      ],
    },
    {
      name: "EWHA",
      label: "EWHA",
      icon: <Square color={"#387546"} />,
      items: [
        {
          name: "Marketing",
          label: "Marketing",
          icon: <Circle color={"#2BF4F4"} />,
        },
        { name: "Design", label: "Design", icon: <Circle color={"#F03D93"} /> },
        {
          name: "Development",
          label: "Design",
          icon: <Circle color={"#4B0CFF"} />,
        },
        {
          name: "AddGroup",
          label: "AddGroup",
          icon: <SvgIcon src={Plus} size={"25px"} />,
        },
      ],
    },
  ]);

  const _addWorkspace = () => {
    //작업공간 추가
  };
  return (
    <Container>
      <Logo />
      <SizedBox height={50} />

      <Menu />
      <SizedBox height={"30px"} />
      <NestedList items={items} label={"group"} setItems={setItems} />

      <MenuWrapper onClick={() => console.log("open modal")}>
        <SvgIcon src={Plus} size={"24px"} />
        <TextContainer>
          <Thin size={"18px"} color={"white"}>
            {"Add Workspace"}
          </Thin>
        </TextContainer>
      </MenuWrapper>
    </Container>
  );
}
const ListItemContainer = styled.div`
  padding-left: ${({ value }) => (value ? value : 0)}px; //depth * depthStep
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 60%;
  cursor: pointer;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400rem;
  background-color: var(--main);
  height: 100vh;
  padding: 20rem;
  padding-top: 30rem;
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
`;
