import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getActivities, getActivity } from "../../../actions/activities";
import { connect } from "react-redux";
import { Button, Item, Label, Segment } from "semantic-ui-react";

const ActivityList = ({
  activities: { activities },
  getActivities,
  getActivity
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
                  onClick={(e) => getActivity(activity.id)}
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
};

const mapStateToProps = (state) => ({
  activities: state.activities,
});

export default connect(mapStateToProps, { getActivities, getActivity })(ActivityList);
