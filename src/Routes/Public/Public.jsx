import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../../Components/Login/Login';
import NavBar from '../../Components/Ui/Navbar/Navbar';
export const Public = () => {
  return (
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
};
