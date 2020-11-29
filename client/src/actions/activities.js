import {
  ACTIVITY_ACTION_ERROR,
  CANCEL,
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
  EDIT_ACTIVITY,
  GET_ACTIVITIES,
  GET_ACTIVITY,
} from "./types";
import axios from "axios";
import { v4 as uuid } from "uuid";

export const getActivities = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/activities");
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ACTIVITY_ACTION_ERROR,
    });
  }
};

export const getActivity = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/activities/${id}`);
    dispatch({
      type: GET_ACTIVITY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ACTIVITY_ACTION_ERROR,
    });
  }
};

export const createActivity = (formData) => async (dispatch) => {
  try {
    const { title, description, category, date, city, venue } = formData;
    const id = uuid();

    const content = {
      id,
      title,
      description,
      category,
      date,
      city,
      venue,
    };

    const body = JSON.stringify(content);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("/api/activities", body, config);
    dispatch({
      type: CREATE_ACTIVITY,
      payload: content,
    });
  } catch (error) {
    dispatch({
      type: ACTIVITY_ACTION_ERROR,
    });
  }
};

export const deleteActivity = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/activities/${id}`, { data: { foo: "bar" } });
    dispatch({
      type: DELETE_ACTIVITY,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ACTIVITY_ACTION_ERROR,
    });
  }
};

export const editActivity = (formData) => async (dispatch) => {
  try {
    //const { title, description, category, date, city, venue } = formData;

    const body = JSON.stringify(formData);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.put(`/api/activities/${formData.id}`, body, config);
    dispatch({
      type: EDIT_ACTIVITY,
      payload: formData
    });
  } catch (error) {
    dispatch({
      type: ACTIVITY_ACTION_ERROR,
    });
  }
};

export const cancel = () => (dispatch) => {
  dispatch({
    type: CANCEL,
  });
};
