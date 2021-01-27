import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import routes from "routes.js";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/welcome") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/welcome" to="/welcome/login" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Welcome({ ...rest }) {
  // styles
  const classes = useStyles();
  return (
    <>
      {switchRoutes}
    </>
  );
}
