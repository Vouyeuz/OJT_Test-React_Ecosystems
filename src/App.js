import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { hot } from "react-hot-loader";
import { Login, SignUp, PageHeader , Homepage, Profile, Courses } from "./containers";

const AppContainer = styled.div`
  box-sizing: border-box;
  color: hsl(360, 100%, 9%);
  font-family: Arial, Helvetica, sans-serif;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/homepage">
            <PageHeader />
            <Homepage />
          </Route>
          <Route exact path="/profile">
            <PageHeader />
            <Profile />
          </Route>
          <Route exact path="/course">
            <PageHeader />
            <Courses />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default hot(module)(App);
