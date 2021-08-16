import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../../Components/Ui/Navbar/Navbar';
export const Public = () => {
  return (
    <Switch>
      <Route path="/">
        <NavBar />
      </Route>
    </Switch>
  );
};
