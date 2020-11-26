import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./styles.css";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState();
  // Check if edit mode is on
  const [editMode, setEditMode] = useState(false);

  const handleSelectedActivity = (id) => {
    setSelectedActivity(activities.filter((activity) => activity.id === id)[0]);
  };

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  const handleCreateActivity = (activity) => {
    setActivities([...activities, activity]);
  }

  const handleEditActivity = (activity) => {
    setActivities([...activities.filter(a => a.id !== activity.id), activity]);
  }

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    const getActivities = async () => {
      try {
        const res = await axios.get("/api/activities");
        setActivities(res.data);
      } catch (e) {
        throw e;
      }
    };

    getActivities();
  }, []);

  return (
    <Fragment>
      <NavBar handleOpenCreateForm={handleOpenCreateForm}/>
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          handleSelectedActivity={handleSelectedActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          toggleEditMode={toggleEditMode}
          setSelectedActivity={setSelectedActivity}
          handleCreateActivity={handleCreateActivity}
          handleEditActivity={handleEditActivity}
        />
      </Container>
    </Fragment>
  );
};

export default App;
