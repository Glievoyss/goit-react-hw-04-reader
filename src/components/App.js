import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/reader" exact component={Reader} />
      </Switch>
      <Redirect
        to={{
          pathname: '/reader',
          search: '?item=1',
        }}
      />
    </>
  );
};
export default App;
