import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

import Navbar from "../../components/navbar/Navbar";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Profile from "../profile/Profile";
import Home from "../../components/home/Home";

const Layout = (props) => {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    let token = localStorage.getItem("jwtToken");
    console.log("===> Hitting a Private Route");
    return (
      <Route
        {...rest}
        render={(props) => {
          return token ? (
            <Component {...rest} {...props} />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  };

  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    if (!localStorage.getItem("jwtToken")) {
      setIsAuthenticated(false);
      console.log("====> Authenticated is now FALSE");
    } else {
      token = jwt_decode(localStorage.getItem("jwtToken"));
      setAuthToken(localStorage.getItem("jwtToken"));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log("===> nowCurrent is here.");
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      // remove token for localStorage
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <>
      <Navbar logout={handleLogout} user={currentUser} />
      <Router>
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login
                {...props}
                nowCurrentUser={nowCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
                user={currentUser}
              />
            )}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route
            path="/profile"
            render={() => <Profile currentUser={currentUser} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default Layout;
