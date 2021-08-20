import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

import { history, RootState } from "./store/store";
import { LandingComponent } from "./features/landing/landing.component";
type ReduxProps = ConnectedProps<typeof connector>;

const AppRouter = (props: ReduxProps) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingComponent} />
        <Route exact path="/hi" component={() => <>bye</>} />

        <Route path="/404" render={() => <div>page not found</div>} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
const AppRouteRedux = connector(AppRouter);

export { AppRouteRedux as AppRouter };
