import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActionCreators';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import RegularButton from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import "assets/css/material-register-react.css"

function Register({ dispatchRegisterAction }) {
  // handle user registration
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
  const [registerErrorMsg, setRegisterErrorMsg] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatchRegisterAction(company, username, password, email, firstName, lastName, city, country, postalCode, aboutMe,
      // eslint-disable-next-line no-restricted-globals
      () => location.reload(),
      (errMsg) => setRegisterErrorMsg(errMsg)
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
          <h4>{registerErrorMsg}</h4>
      <div class="register-bg"></div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  // redux
  dispatchRegisterAction: (company, username, password, email, firstName, lastName, city, country, postalCode, aboutMe, onSuccess, onError) =>
  dispatch(registerUser({ company, username, password, email, firstName, lastName, city, country, postalCode, aboutMe }, onSuccess, onError))
})
export default connect(null, mapDispatchToProps)(Register);


