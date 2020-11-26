import React from "react";
import PropTypes from "prop-types";
import { Button, Item, Label, Segment } from "semantic-ui-react";

const ActivityList = ({ activities, handleSelectedActivity }) => {
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
                  onClick={(e) => handleSelectedActivity(activity.id)}
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
  activities: PropTypes.array.isRequired,
  handleSelectedActivity: PropTypes.func.isRequired,
};

export default ActivityList;
