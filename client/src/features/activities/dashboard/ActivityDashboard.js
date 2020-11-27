import React from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

const ActivityDashboard = ({
  editMode,
  toggleEditMode,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        {!editMode && (
          <ActivityDetails
            toggleEditMode={toggleEditMode}
          />
        )}
        {editMode && (
          <ActivityForm
            toggleEditMode={toggleEditMode}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
