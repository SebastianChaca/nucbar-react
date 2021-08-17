import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../../Components/Ui/Navbar/Navbar';
export const Layout = ({ children }) => {
  return (
    <Switch>
      <Route>
        <NavBar />
        {children}
      </Route>
    </Switch>
  );
};
