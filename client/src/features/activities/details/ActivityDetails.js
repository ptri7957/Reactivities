import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button, Card, Image } from "semantic-ui-react";

const ActivityDetails = ({
  selectedActivity,
  toggleEditMode,
  setSelectedActivity,
}) => {
  return selectedActivity ? (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${selectedActivity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{selectedActivity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{selectedActivity.date}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={(e) => toggleEditMode()}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={(e) => setSelectedActivity(null)}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  ) : (
    <Fragment></Fragment>
  );
};

ActivityDetails.propTypes = {
  selectedActivity: PropTypes.object,
};

export default ActivityDetails;
