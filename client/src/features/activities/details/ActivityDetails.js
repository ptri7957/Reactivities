import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Button, Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { cancel } from "../../../actions/activities"

const ActivityDetails = ({
  activities: { activity },
  toggleEditMode,
  cancel
}) => {
  return activity ? (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
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
            onClick={(e) => cancel()}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  ) : (
    <Fragment></Fragment>
  );
};

ActivityDetails.propTypes = {
  activities: PropTypes.object.isRequired,
  cancel: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activities: state.activities
});

export default connect(mapStateToProps, {cancel})(ActivityDetails);
