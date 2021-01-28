import React, { useState } from "react";
import { Link } from 'react-router-dom';
import RegularButton from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { loginUser } from '../../redux/actions/authActionCreators';
import { connect } from "react-redux";
import "assets/css/material-login-react.css";

function Login( { dispatchLoginAction } ) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    dispatchLoginAction(username, password,
      // eslint-disable-next-line no-restricted-globals
      () => location.reload(), 
      (errMsg) => setLoginErrorMsg(errMsg)
      ) 
  }

  return (
    <div class="main-wrapper">
      <h1 class="login-title">
        Welcome
      </h1>
      <form class="form" noValidate onSubmit={handleOnSubmit}>
        <div class="inputs-wrapper">
              <CustomInput
              labelText="Username"
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
    // redux 
    dispatchLoginAction: (username, password, onSuccess, orError) =>
    dispatch(loginUser({ username, password }, onSuccess, orError))
});
export default connect(null, mapDispatchToProps)(Login)
