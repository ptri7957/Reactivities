import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getActivities, getActivity, deleteActivity } from "../../../actions/activities";
import { connect } from "react-redux";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ActivityList = ({
  activities: { activities },
  getActivities,
  deleteActivity
}) => {
  useEffect(() => {
    getActivities();
  }, [getActivities]);

  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{`${activity.city}, ${activity.venue}`}</div>
              </Item.Description>
              <Item.Extra>
                <Button
                  floated="right"
                  content="view"
                  color="blue"
                  // onClick={(e) => getActivity(activity.id)}
                  as={Link} to={`/activities/${activity.id}`}
                />
                <Button
                  floated="right"
                  content="delete"
                  color="red"
                  onClick={(e) => deleteActivity(activity.id)}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

ActivityList.propTypes = {
  activities: PropTypes.object.isRequired,
  getActivities: PropTypes.func.isRequired,
  getActivity: PropTypes.func.isRequired,
  deleteActivity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activities: state.activities,
});

export default connect(mapStateToProps, { getActivities, getActivity, deleteActivity })(ActivityList);
