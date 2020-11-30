import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { getActivities } from "../../../actions/activities";
import { connect } from "react-redux";
import { Item, Segment, Label } from "semantic-ui-react";
import ActivityListItem from "./ActivityListItem";

const ActivityList = ({
  activities: { activitiesByDate, loading },
  getActivities,
}) => {
  useEffect(() => {
    getActivities();
  }, [getActivities]);

  return !loading ? (
    <Fragment>
      {activitiesByDate.map(([group, activities]) => (
        <Fragment key={group}>
          <Label size="large" color="blue">
            {group}
          </Label>
          <Item.Group divided>
            {activities.map((activity) => (
              <ActivityListItem key={activity.id} activity={activity} />
            ))}
          </Item.Group>
        </Fragment>
      ))}
    </Fragment>
  ) : (
    <Fragment></Fragment>
  );
};

ActivityList.propTypes = {
  activities: PropTypes.object.isRequired,
  getActivities: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activities: state.activities,
});

export default connect(mapStateToProps, {
  getActivities,
})(ActivityList);
