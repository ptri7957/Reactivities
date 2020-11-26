import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

const ActivityDashboard = ({
  activities,
  handleSelectedActivity,
  selectedActivity,
  editMode,
  toggleEditMode,
  setSelectedActivity,
  handleCreateActivity,
  handleEditActivity
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={activities}
          handleSelectedActivity={handleSelectedActivity}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {!editMode && (
          <ActivityDetails
            selectedActivity={selectedActivity}
            toggleEditMode={toggleEditMode}
            setSelectedActivity={setSelectedActivity}
          />
        )}
        {editMode && (
          <ActivityForm
            toggleEditMode={toggleEditMode}
            selectedActivity={selectedActivity}
            handleCreateActivity={handleCreateActivity}
            handleEditActivity={handleEditActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

ActivityDashboard.propTypes = {
  activities: PropTypes.array.isRequired,
  handleSelectedActivity: PropTypes.func.isRequired,
  selectedActivity: PropTypes.object,
};

export default ActivityDashboard;
