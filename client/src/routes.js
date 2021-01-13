// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import LeagueEdit from "./pages/LeagueEdit";
import LeagueList from "./pages/LeagueList";
import MatchesEdit from "./pages/MatchesEdit";
import MatchesList from "./pages/MatchesList";
import PlayersEdit from "./pages/PlayersEdit";
import PlayersList from "./pages/PlayersList";
import PreferencesEdit from "./pages/PreferencesEdit";
import PreferencesList from "./pages/PreferencesList";
import TeamsEdit from "./pages/TeamsEdit";
import TeamsList from "./pages/TeamsList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/leagues/:id" component={ LeagueEdit }  />
              <PrivateRoute exact path="/leagues" component={ LeagueList }  />
              <PrivateRoute exact path="/matcheses/:id" component={ MatchesEdit }  />
              <PrivateRoute exact path="/matcheses" component={ MatchesList }  />
              <PrivateRoute exact path="/playerses/:id" component={ PlayersEdit }  />
              <PrivateRoute exact path="/playerses" component={ PlayersList }  />
              <PrivateRoute exact path="/preferenceses/:id" component={ PreferencesEdit }  />
              <PrivateRoute exact path="/preferenceses" component={ PreferencesList }  />
              <PrivateRoute exact path="/teamses/:id" component={ TeamsEdit }  />
              <PrivateRoute exact path="/teamses" component={ TeamsList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;