import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Redirect, Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PageBase from './components/layouts/PageBase';
import { clearStorages, getsingleRoute, getTokenCookie } from './utils/storage';
import pages from './pages';
import { routes } from './configs/routes';
import { useCookie } from 'logeeport-ui';

const noAuthRoutes = [
  `${routes.LOGIN()}`];
const noAuth = noAuthRoutes.some(r => location.pathname.match(r));


if (!getTokenCookie() && !noAuth) {
  location.href = '/login';
}
else if (getTokenCookie() && noAuth) {
  location.href = '/';
}

const App = ({ history, store }) => (
  <Provider store={store}>
    <Router history={history}>
      <PageBase>
        <Switch>
          <Route component={pages.Login} exact path={routes.LOGIN()} />
          <PrivateRoute component={pages.Main} exact path={routes.DASHBOARD()} />
          <PrivateRoute component={pages.PPJK} exact path={routes.PPJK()} />
          <Route component={pages.Error404} />
        </Switch>
      </PageBase>
    </Router>
  </Provider>
);

const PrivateRoute = ({ exact, path, component }) => {
  if ((!getTokenCookie() && !getsingleRoute()) && !noAuth) {
    clearStorages();
    useCookie.removeAllCookie();
    return (
      <Route
        render={({ location }) => (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )}
      />
    );
  } else {
    return (
      <Route component={component} exact={exact} path={path}/>
    );
  }
};

export default hot(App);

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};


PrivateRoute.defaultProps = {
  component: ()=>{},
  exact: null,
  path: '',
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  exact: PropTypes.bool,
  path: PropTypes.string,
};

