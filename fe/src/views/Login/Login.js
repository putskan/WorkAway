import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import bgImage from "assets/img/sidebar-2.jpg";
import { bugs, website, server } from "variables/general.js";
import RegularButton from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

 import { loginUser } from '../../redux/actions/authActionCreators'

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import "assets/css/material-login-react.css"
import { connect } from "react-redux";

// const useStyles = makeStyles(styles);


function Login( { dispatchLoginAction } ) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    dispatchLoginAction(username, password,
      // eslint-disable-next-line no-restricted-globals
      () => console.log('location.reload()'), 
      (errMsg) => setLoginErrorMsg(errMsg)
      ) 
  }

  return (
    <div class="main-wrapper">
      <h1 class="login-title">
        Welcome
      </h1>
      <form noValidate onSubmit={handleOnSubmit}>
        <div class="inputs-wrapper">
              <CustomInput
              labelText="Username"
              id="username"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value: username,
                onChange: (e) => setUsername(e.target.value)
              }}>
              </CustomInput>
              <CustomInput
              labelText="Password"
              id="Password"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value)
              }}
              >
              </CustomInput>
        </div>
        <div class="buttons-wrapper">
          <RegularButton type="submit" block={false} round={false} color="info">Login</RegularButton>
          <Link to={'/Welcome/Register'}>
            <RegularButton block={false} round={false} simple={true} color="info">Register</RegularButton>
          </Link>
        </div>
      </form>
      <h4>{loginErrorMsg}</h4>
      <div class="login-bg"></div>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  dispatchLoginAction: (username, password, onSuccess, orError) =>
    dispatch(loginUser({ username, password }, onSuccess, orError))
});
export default connect(null, mapDispatchToProps)(Login)
