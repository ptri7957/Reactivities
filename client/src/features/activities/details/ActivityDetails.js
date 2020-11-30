import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { getActivity } from "../../../actions/activities";
import { Link } from "react-router-dom";

const ActivityDetails = ({
  activities: { activity, loading },
  match,
  getActivity,
  history
}) => {
  useEffect(() => {
    getActivity(match.params.id);
  }, [getActivity, match.params.id]);

  return !loading && activity !== null ? (
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
            as={Link}
            to={`/edit/${activity.id}`}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={e => history.push("/activities")}
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
  getActivity: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activities: state.activities
});

export default connect(mapStateToProps, {getActivity})(ActivityDetails);
