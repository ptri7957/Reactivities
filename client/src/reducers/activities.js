import {
  GET_ACTIVITIES,
  GET_ACTIVITY,
  ACTIVITY_ACTION_ERROR,
  CANCEL,
  DELETE_ACTIVITY,
  CREATE_ACTIVITY,
  EDIT_ACTIVITY,
  SORT_ACTIVITY,
} from "../actions/types";

const initialState = {
  activities: [],
  activitiesByDate: [],
  activity: null,
  loading: true,
};

const groupActivitiesByDate = (activities) => {
  const sortedActivities = activities.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return Object.entries(sortedActivities.reduce((activities, activity) => {
    const date = activity.date.split('T')[0];
    activities[date] = activities[date] ? [...activities[date], activity] : [activity];
    return activities;
  }, {}));
}

const activities = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        activitiesByDate: groupActivitiesByDate(action.payload),
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
        loading: false,
      };
    case EDIT_ACTIVITY:
      return {
        ...state,
        loading: false
      };
    case SORT_ACTIVITY:
      return {
        ...state,
        activitiesByDate: groupActivitiesByDate([...state.activities]),
        loading: false
      }
    case CANCEL:
      return {
        ...state,
        activity: null,
        loading: false,
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter((a) => a.id !== action.payload),
        loading: false,
      };
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

export default activities;
