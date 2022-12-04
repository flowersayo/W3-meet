//import AddSquare from "../../assets/icons/plus-square";
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

export default function Group() {
  const [groupOpen, setGroupOpen] = React.useState(true);
  console.log(groupOpen);
  const handleClick = () => {
    setGroupOpen(!groupOpen);
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "#396eb0" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>Groups</ListItemIcon>

        {groupOpen ? "ExpandLess" : "ExpandMore"}
      </ListItemButton>
      <Collapse in={groupOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>StarBorder</ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
