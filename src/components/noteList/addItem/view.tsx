import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import AddItemProps from "./props";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const AddItemView: React.FunctionComponent<AddItemProps> = (props: AddItemProps) => {
  return (
    <ListItem onClick={props.onClick} button>
      <ListItemIcon>
        <AddCircleIcon />
      </ListItemIcon>
      <ListItemText>Add New</ListItemText>
    </ListItem>
  );
};
export default AddItemView;
