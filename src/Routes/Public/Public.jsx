import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../../Components/Login/Login';
import { useSelector } from 'react-redux';
export const Public = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <Switch>
      <Route path="/login">
        {currentUser ? <Redirect to="/" /> : <Login />}
      </Route>
    </Switch>
  );
};
