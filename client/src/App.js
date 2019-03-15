import React, { Component } from "react";
// Components
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Content from "./Content";
import PrivateRoute from "./components/private-route/PrivateRoute";
// Router
import { Switch, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// Router
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename={"/website/"}>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/store" component={Content} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;