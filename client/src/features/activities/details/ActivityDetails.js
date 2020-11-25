import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Icon, Image } from "semantic-ui-react";

const ActivityDetails = (props) => {
  return (
    <Card fluid>
      <Image src="/assets/placeholder.png" wrapped ui={false} />
      <Card.Content>
        <Card.Header>Title</Card.Header>
        <Card.Meta>
          <span className="date">Date</span>
        </Card.Meta>
        <Card.Description>Description</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button basic color="blue" content="Edit" />
          <Button basic color="grey" content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

ActivityDetails.propTypes = {};

export default ActivityDetails;
