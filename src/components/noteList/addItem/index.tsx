import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { push } from "react-router-redux";
import { setNote } from "../../../store/note/actions";
import { ApplicationState, ApplicationAction } from "../../../store";
import AddItemView from "./view";
import AddItemProps from "./props";

const AddItem: React.FunctionComponent<AddItemProps> = (props) => {
  return <AddItemView onClick={props.onClick} />;
};

const mapStateToProps = (store: ApplicationState) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<ApplicationAction>) => {
  return {
    onClick: () => {
      const uuid = uuidv4();
      dispatch(setNote(uuid));
      dispatch(push(`/${uuid}`));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AddItem);
