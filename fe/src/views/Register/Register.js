import React from "react";
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
import InputLabel from "@material-ui/core/InputLabel";
// core components
import CardAvatar from "components/Card/CardAvatar.js";



 

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import "assets/css/material-register-react.css"

// const useStyles = makeStyles(styles);


export default function Register() {
  return (
    <div class="main-wrapper">
      <h1 class="register-title">
        Register
      </h1>
      <h3 class="register-subtitle">Fill in the details below and enjoy the full dashboard experience!</h3>

      <div class="form-wrapper">
        <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Company"
                      id="company"
                      formControlProps={{
                        fullWidth: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Password"
                      id="password"
                      formControlProps={{
                        fullWidth: false
                      }}
                      inputProps={{
                        type: "password",
                      }}          
                    />
                  </GridItem>                  
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      formControlProps={{
                        fullWidth: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City"
                      id="city"
                      formControlProps={{
                        fullWidth: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country"
                      id="country"
                      formControlProps={{
                        fullWidth: false
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code"
                      id="postal-code"
                      formControlProps={{
                        fullWidth: false
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="About Me"
                      id="about-me"
                      formControlProps={{
                        fullWidth: false
                      }}
                      // inputProps={{
                      //   multiline: true,
                      //   rows: 2
                      // }}
                    />
                  </GridItem>
                </GridContainer>
                <div class="buttons-wrapper">
                  <Link to={'/Welcome/Register'}>
                    <RegularButton block={false} round={false} color="info">Sign Up</RegularButton>
                  </Link>
                  <Link to={'/Welcome/Login'}>
                    <RegularButton block={false} round={false} simple={true} color="info">Back</RegularButton>
                  </Link>
                </div>

            </div>
      

      <div class="register-bg"></div>

    </div>
  );
}

// const {
//   formControlProps,
//   labelText,
//   id,
//   labelProps,
//   inputProps,
//   error,
//   success
// } = props;




// RegularButton.propTypes = {
//   color
  
  
// //   "primary",
// //     "info",
// //     "success",
// //     "warning",
// //     "danger",
// //     "rose",
// //     "white",
// //     "transparent"
// //   ]),
// //   size: PropTypes.oneOf(["sm", "lg"]),
// //   simple: PropTypes.bool,
// //   round: PropTypes.bool,
// //   disabled: PropTypes.bool,
// //   block: PropTypes.bool,
// //   link: PropTypes.bool,
// //   justIcon: PropTypes.bool,
// //   className: PropTypes.string,
// //   // use this to pass the classes props from Material-UI
// //   muiClasses: PropTypes.object,
// //   children: PropTypes.node
// // };
      // // //   "primary",
// //     "info",
// //     "success",
// //     "warning",
// //     "danger",
// //     "rose",
// //     "white",
// //     "transparent"

