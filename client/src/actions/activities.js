import { ACTIVITY_ACTION_ERROR, CANCEL, GET_ACTIVITIES, GET_ACTIVITY } from "./types";
import axios from "axios";

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

export const createActivity = () => async dispatch => {
    
}

export const cancel = () => dispatch => {
    dispatch({
        type: CANCEL
    });
}
