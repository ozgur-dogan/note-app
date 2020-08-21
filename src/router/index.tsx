import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../pages/mainPage";

const Router: React.FunctionComponent<{}> = (props: {}) => {
  return (
    <Switch>
      <Route path={["/", "/:noteID"]} component={MainPage} />
    </Switch>
  );
};
export default Router;
