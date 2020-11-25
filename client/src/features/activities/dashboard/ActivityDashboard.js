import React from "react";
import PropTypes from "prop-types";
import { Grid, List } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";

const ActivityDashboard = ({ activities }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList activities={activities} />
      </Grid.Column>
      <Grid.Column width={6}>
          <ActivityDetails />
      </Grid.Column>
    </Grid>
  );
};

ActivityDashboard.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default ActivityDashboard;
