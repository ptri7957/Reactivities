import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./styles.css";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { Provider } from "react-redux";
import store from "../../store";
import {cancel} from "../../actions/activities"

const App = () => {

  // Check if edit mode is on
  const [editMode, setEditMode] = useState(false);

  const handleOpenCreateForm = () => {
    store.dispatch(cancel());
    setEditMode(true);
  }

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <Provider store={store}>
      <NavBar handleOpenCreateForm={handleOpenCreateForm}/>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          editMode={editMode}
          toggleEditMode={toggleEditMode}
        />
      </Container>
    </Provider>
  );
};

export default App;
