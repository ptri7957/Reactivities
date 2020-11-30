import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./styles.css";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { Provider } from "react-redux";
import store from "../../store";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

const App = ({ location }) => {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <Fragment>
              <NavBar />
              <Container style={{ marginTop: "7em" }}>
                <Route exact path="/activities" component={ActivityDashboard} />
                <Route
                  exact
                  path="/activities/:id"
                  render={(props) => <ActivityDetails {...props} />}
                />
                <Route
                  key={location.key}
                  exact
                  path={["/create", "/edit/:id"]}
                  render={(props) => <ActivityForm {...props} />}
                />
              </Container>
            </Fragment>
          )}
        />
      </Switch>
    </Provider>
  );
};

export default withRouter(App);
