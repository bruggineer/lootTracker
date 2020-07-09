import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Home, WishList, WishListDetails } from "./pages";
import Auth from "./pages/Auth"
import { Navigation } from "./components";
import { Error } from "./components";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import API from './utils/API';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("")

  function loginUser(email, password) {
    const data = {
      email: email,
      password: password
    }
    API.Auth.login(data).then(res => {
      setUser(res.data)

    })
  }

  function signupUser(email, password) {
    const data = {
      email: email,
      password: password
    }
    API.Auth.signup(data).then(res => {
      setUser(res.data)
    }).catch(err => {
      setError("Email already taken")
    })
  }

  function logoutUser() {
    API.Auth.logout().then(res => {
      setUser({});
    })
  }

  function clearError() {
    setError("");
  }

  return (
    <>
     <MuiThemeProvider theme={theme}>
     <CssBaseline>
      <Router>
        <Container >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Navigation user={user} logoutUser={logoutUser} />
            </Grid>
            <Grid item xs={12}>
              {error && <Error error={error} clearError={clearError} />}
            </Grid>
            <Grid item xs={12}>
              <Switch>
                <Route exact path={["/", "/home"]}>
                  <Home />
                </Route>
                <PrivateRoute exact user={user} path={["/wishlist"]}>
                  <WishList user={user}/>
                </PrivateRoute>
                <PrivateRoute exact user={user} path={["/wishlistdetails"]}>
                  <WishListDetails user={user} />
                </PrivateRoute>
                <Route exact path={["/login", "/signup"]}>
                  <Auth
                    user={user}
                    loginUser={loginUser}
                    signupUser={signupUser}
                  />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Router>
      </CssBaseline>
      </MuiThemeProvider>
    </>
  );
}

function PrivateRoute(props) {
  return (
    <>
      {props.user.email ?
        <Route {...props}>
          {props.children}
        </Route>
        :
        <Redirect to="/login" />
      }
    </>
  )
}

export default App;
