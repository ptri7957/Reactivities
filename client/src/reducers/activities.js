import {
  GET_ACTIVITIES,
  GET_ACTIVITY,
  ACTIVITY_ACTION_ERROR,
  CANCEL,
  DELETE_ACTIVITY,
  CREATE_ACTIVITY,
} from "../actions/types";

const initialState = {
  activities: [],
  activity: null,
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        loading: false,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
        loading: false,
      };
    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
        loading: false
      }
    case CANCEL:
      return {
        ...state,
        activity: null,
        loading: false
      }
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(a => a.id !== action.payload),
        loading: false
      }
    case ACTIVITY_ACTION_ERROR:
      return {
        ...state,
        activities: [],
        activity: null,
        loading: false,
      };
    default:
      return state;
  }
}
