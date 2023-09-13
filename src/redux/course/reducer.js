import {
  GET_BESTSTUDENTS_FAILURE,
  GET_BESTSTUDENTS_REQUEST,
  GET_BESTSTUDENTS_SUCCESS,
  GET_COURSE_FAILURE,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_LATESTENROLLMENT_FAILURE,
  GET_LATESTENROLLMENT_REQUEST,
  GET_LATESTENROLLMENT_SUCCESS,
} from "./actionTypes";

const intialState = {
  isLoading: false,
  isError: false,
  courses: [],
  latestEnrollment: [],
  bestStudents: [],
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    // Course
    case GET_COURSE_REQUEST:
      return { ...state, isLoading: true };
    case GET_COURSE_SUCCESS:
      return { ...state, isLoading: false, courses: payload };
    case GET_COURSE_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // Latest Enrollment
    case GET_LATESTENROLLMENT_REQUEST:
      return { ...state, isLoading: true };
    case GET_LATESTENROLLMENT_SUCCESS:
      return { ...state, isLoading: false, latestEnrollment: payload };
    case GET_LATESTENROLLMENT_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // Best Students
    case GET_BESTSTUDENTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_BESTSTUDENTS_SUCCESS:
      return { ...state, isLoading: false, bestStudents: payload };
    case GET_BESTSTUDENTS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
