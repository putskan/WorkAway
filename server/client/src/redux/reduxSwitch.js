import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider, connect } from 'react-redux';
// core components
import Admin from "layouts/Admin.js";
import Welcome from "layouts/Welcome.js";
import RTL from "layouts/RTL.js";


const mapStateToProps = (state) => ({ user: state.user });
const ReduxSwitch = ( {user} ) => {
  return (
      <>
      {user.isLoggedIn ? 
        (<Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/rtl" component={RTL} />
            <Redirect from="/" to="/admin/dashboard" />
          </Switch>):

          (<Switch>
            <Route path="/welcome" component={Welcome} />
            <Redirect from="/" to="/welcome/login" />
          </Switch>)
      }
      </>
  );
}

export default connect(mapStateToProps)(ReduxSwitch)