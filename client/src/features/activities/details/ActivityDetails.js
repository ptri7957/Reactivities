import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { getActivity } from "../../../actions/activities";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
import ActivityDetailedChat from "./ActivityDetailedChat";

const ActivityDetails = ({
  activities: { activity, loading },
  match,
  getActivity,
}) => {
  useEffect(() => {
    getActivity(match.params.id);
  }, [getActivity, match.params.id]);

  console.log(activity);

  return (
    !loading && activity ? (
      <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity}/>
        <ActivityDetailedInfo activity={activity}/>
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <ActivityDetailedSidebar />
      </Grid.Column>
    </Grid>
    ) : (<Fragment></Fragment>)
  );
};

ActivityDetails.propTypes = {
  activities: PropTypes.object.isRequired,
  getActivity: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activities: state.activities
});

export default connect(mapStateToProps, {getActivity})(ActivityDetails);
