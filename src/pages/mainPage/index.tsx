import React from "react";
import { useParams } from "react-router-dom";
import RouteParams from "../../router/params";
import MainPageView from "./view";

const MainPage: React.FunctionComponent<{}> = () => {
  const { noteID } = useParams<RouteParams>();
  return <MainPageView noteID={noteID} />;
};

export default MainPage;
