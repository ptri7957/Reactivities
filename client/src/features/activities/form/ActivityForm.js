import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { createActivity, editActivity } from "../../../actions/activities";

const ActivityForm = ({
  activities: {activity},
  toggleEditMode,
  createActivity,
  editActivity
}) => {
  const initialiseForm = () => {
    
    if (activity) {
      return activity;
    } else {
      return {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };

  const handleChange = (e) => {
    setFormContent({
      ...formContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formContent.id.length === 0){
        // let newActivity = {
        //     ...formContent,
        //     id: uuid()
        // }
        // handleCreateActivity(newActivity)
        
        // Call createActivity action
        createActivity(formContent); 
    }else{
        // handleEditActivity(formContent);

        // Call editActivity action
        editActivity(formContent);
    }
  };

  const [formContent, setFormContent] = useState(initialiseForm());

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
          onClick={(e) => toggleEditMode()}
        />
      </Form>
    </Segment>
  );
};

ActivityForm.propTypes = {
  toggleEditMode: PropTypes.func.isRequired,
  activities: PropTypes.object.isRequired,
  createActivity: PropTypes.func.isRequired,
  editActivity: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activities: state.activities
});

export default connect(mapStateToProps, {createActivity, editActivity})(ActivityForm);
