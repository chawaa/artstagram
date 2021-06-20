import * as React from "react";
import { hashHistory, RouteComponentProps } from "react-router";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { IUser } from "../IArtImage";
import { Sorting } from "../Sorting";
import { Home } from "./Home";
import { ThemeSwitch } from "./theme/ThemeSwitch";
import { UserProfile } from "./userProfile/UserProfile";

const App = () => (
  <>
    <BrowserRouter history={hashHistory}>
      <>
        <Route exact path="/" render={() => <Redirect to="/feed/trending/" />} />
        <Route
          path="/feed/picks/"
          component={() => <Home sorting={Sorting.PICKS} />}
        />
        <Route
          path="/feed/latest/"
          component={() => <Home sorting={Sorting.LATEST} />}
        />
        <Route
          path="/feed/trending/"
          component={() => <Home sorting={Sorting.TRENDING} />}
        />
        <Route
          path="/feed/randomize/"
          component={() => <Home sorting={Sorting.COMMUNITY} />}
        />
        <Route
          path="/user/:id"
          component={({
            history,
            location
          }: RouteComponentProps<{}, {}, { user: IUser }>) => (
            <UserProfile goBack={history.goBack} user={location.state.user} />
          )}
        />
      </>
    </BrowserRouter>
    <ThemeSwitch />
  </>
);

export { App };
