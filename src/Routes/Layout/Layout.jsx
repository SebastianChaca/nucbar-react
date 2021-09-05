import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Gallery from '../../Components/Ui/Gallery/Gallery';
import NavBar from '../../Components/Ui/Navbar/Navbar';
export const Layout = ({ children }) => {
  return (
    <Switch>
      <Route>
        <NavBar />
        <Gallery />
        {children}
      </Route>
    </Switch>
  );
};
