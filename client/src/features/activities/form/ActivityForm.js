import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { createActivity, editActivity, cancel, getActivity } from "../../../actions/activities";
import { withRouter } from "react-router-dom";

const ActivityForm = ({
  activities: {activity},
  createActivity,
  editActivity,
  history,
  cancel,
  match
}) => {
  const [formContent, setFormContent] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  const handleChange = (e) => {
    setFormContent({
      ...formContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(match.params.id){
      editActivity(formContent); 
    }else{
      createActivity(formContent);
    }
    history.push("/activities");
  };

  const handleCancel = () => {
    cancel();
    history.push("/activities");
  }

  useEffect(() => {
    if(match.params.id){
      getActivity(match.params.id);
    }

    if(activity){
      setFormContent(activity);
    }

    return () => cancel();
  }, [formContent, setFormContent, cancel, match, activity]);

  return (
    <Segment clearing>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          placeholder="Title"
          value={formContent.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <FormTextArea
          rows={2}
          placeholder="Description"
          value={formContent.description}
          name="description"
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          placeholder="Category"
          value={formContent.category}
          name="category"
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          type="date"
          placeholder="Date"
          value={formContent.date}
          name="date"
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          placeholder="City"
          value={formContent.city}
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <FormInput
          placeholder="Venue"
          value={formContent.venue}
          name="venue"
          onChange={(e) => handleChange(e)}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          floated="right"
          content="Cancel"
          onClick={(e) => handleCancel()}
        />
      </Form>
    </Segment>
  );
};

ActivityForm.propTypes = {
  activities: PropTypes.object.isRequired,
  createActivity: PropTypes.func.isRequired,
  editActivity: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activities: state.activities
});

export default connect(mapStateToProps, {createActivity, editActivity, cancel})(withRouter(ActivityForm));
