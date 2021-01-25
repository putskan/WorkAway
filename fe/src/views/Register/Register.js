import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActionCreators';

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


function Register({ dispatchRegisterAction }) {

  const [company, setCompany] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchRegisterAction(company, username, password, email, firstName, lastName, city, country, postalCode, aboutMe,
      // eslint-disable-next-line no-restricted-globals
      () => {location.reload()}, () => 'Login failed',
      (msg) => console.log('error on register')
      );
  }

  return (
    <div class="main-wrapper">
      <h1 class="register-title">
        Register
      </h1>
      <h3 class="register-subtitle">Fill in the details below and enjoy the full dashboard experience!</h3>

      <div class="form-wrapper">
        <form noValidate onSubmit={handleOnSubmit}>
          <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Company"
                    id="company"
                    formControlProps={{
                      fullWidth: false
                    }}
                    inputProps={{
                      value: company,
                      onChange: (e) => setCompany(e.target.value)
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
                    inputProps={{
                      value: username,
                      onChange: (e) => setUsername(e.target.value)
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
                      value: password,
                      onChange: (e) => setPassword(e.target.value)
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
                    inputProps={{
                      value: email,
                      onChange: (e) => setEmail(e.target.value)
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
                    inputProps={{
                      value: firstName,
                      onChange: (e) => setFirstName(e.target.value)
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
                    inputProps={{
                      value: lastName,
                      onChange: (e) => setLastName(e.target.value)
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
                    inputProps={{
                      value: city,
                      onChange: (e) => setCity(e.target.value)
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
                    inputProps={{
                      value: country,
                      onChange: (e) => setCountry(e.target.value)
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
                    inputProps={{
                      value: postalCode,
                      onChange: (e) => setPostalCode(e.target.value)
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
                    inputProps={{
                      value: aboutMe,
                      onChange: (e) => setAboutMe(e.target.value)
                    }}
                    // inputProps={{
                    //   multiline: true,
                    //   rows: 2
                    // }}
                  />
                </GridItem>
              </GridContainer>
              <div class="buttons-wrapper">
                <RegularButton type="submit" block={false} round={false} color="info">Sign Up</RegularButton>
                <Link to={'/Welcome/Login'}>
                  <RegularButton block={false} round={false} simple={true} color="info">Back</RegularButton>
                </Link>
              </div>
            </form>
          </div>
      

      <div class="register-bg"></div>

    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatchRegisterAction: (company, username, password, email, firstName, lastName, city, country, postalCode, aboutMe, onSuccess, onError) =>
   dispatch(registerUser({ company, username, password, email, firstName, lastName, city, country, postalCode, aboutMe }, onSuccess, onError))
})
export default connect(null, mapDispatchToProps)(Register);


