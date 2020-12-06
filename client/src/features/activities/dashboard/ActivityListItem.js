import React from "react";
import { Button, Item, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { deleteActivity } from "../../../actions/activities";
import { connect } from "react-redux";

const ActivityListItem = ({ activity, deleteActivity }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item>
          <Item.Image size="tiny" circular src="/assets/user.png" />
          <Item.Content>
            <Item.Header as="a">{activity.title}</Item.Header>
            <Item.Meta>{activity.date}</Item.Meta>
            <Item.Description>
              {/* <div>{activity.description}</div>
              <div>{`${activity.city}, ${activity.venue}`}</div> */}
              Hosted by Bob
            </Item.Description>
            {/* <Item.Extra>
              <Label basic content={activity.category} />
            </Item.Extra> */}
          </Item.Content>
        </Item>
      </Segment>
      <Segment>
        <Icon name="clock" /> {activity.date}
        <Icon name="marker" /> {activity.venue}, {activity.city}
      </Segment>
      <Segment secondary>Attendees will go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          floated="right"
          content="view"
          color="blue"
          as={Link}
          to={`/activities/${activity.id}`}
        />
        <Button
          floated="right"
          content="delete"
          color="red"
          onClick={(e) => deleteActivity(activity.id)}
        />
      </Segment>
    </Segment.Group>
  );
};

export default connect(null, { deleteActivity })(ActivityListItem);
