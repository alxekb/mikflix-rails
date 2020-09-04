import React from 'react';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ROUTES } from '../../_constants';

import Homepage from '../pages/HomepageComponent';
import News from '../pages/NewsComponent';
import Forum from '../pages/ForumComponent';
import Cinema from '../pages/CinemaComponent';
import SignIn from '../pages/SignInComponent';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const MainComponent = () => {
  return (
    <div className="view">
      <Route component={ScrollToTop}/>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={Homepage} />
        <Route exact path={ROUTES.NEWS} component={News} />
        <Route exact path={ROUTES.FORUM} component={Forum} />
        <Route exact path={ROUTES.CINEMA} component={Cinema} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
      </Switch>
    </div>
  );
};

export default MainComponent;
