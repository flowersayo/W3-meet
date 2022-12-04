import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ListItem } from "@mui/material";

import Collapse from "@mui/material/Collapse";
import styled from "styled-components";
import { Thin } from "../../styles/font";
import { H4 } from "../../styles/font";
import SizedBox from "../common/SizedBox";
import { Down } from "../../assets";
import { Up } from "../../assets";
import SvgIcon from "../common/SvgIcon";
const ListItemTextContainer = styled.div`
  padding-left: ${({ value }) => (value ? value : 0)}px; //depth * depthStep
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function MenuItem({
  icon,
  label,
  items,
  setItems,
  depthStep = 10,
  depth = 0,
  ...rest
}) {
  return (
    <>
      <ListItem button dense {...rest}>
        <ListItemTextContainer value={depth * depthStep * 3}>
          {icon}
          <SizedBox width={"10px"} />
          <Thin size={"18px"} color={"white"}>
            {label}
          </Thin>
        </ListItemTextContainer>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem) => (
            <MenuItem
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </>
  );
}

export default function NestedList({ items, depthStep, depth }) {
  const [groupOpen, setGroupOpen] = React.useState(true);
  const handleClick = () => {
    setGroupOpen(!groupOpen);
  };

  return (
    <div
      className="sidebar"
      style={{ borderTop: "1px solid white", borderBottom: "1px solid white" }}
    >
      <List disablePadding dense>
        <ListItemButton
          onClick={handleClick}
          sx={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <H4 color={"white"}>Groups</H4>

          {groupOpen ? (
            <SvgIcon src={Up} />
          ) : (
            <SvgIcon src={Down} size={"20px"} />
          )}
        </ListItemButton>
        <Collapse in={groupOpen} timeout="auto" unmountOnExit>
          {items.map((sidebarItem, index) => (
            <>
              <MenuItem
                key={`${sidebarItem.name}${index}`}
                depthStep={depthStep}
                depth={depth}
                {...sidebarItem}
              />
              <SizedBox height={"20px"} />
            </>
          ))}
        </Collapse>
      </List>
    </div>
  );
}
