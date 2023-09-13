import axios from "axios";
import {
  GET_COURSE_FAILURE,
  GET_COURSE_REQUEST,
  GET_COURSE_SUCCESS,
  GET_LATESTENROLLMENT_FAILURE,
  GET_LATESTENROLLMENT_REQUEST,
  GET_LATESTENROLLMENT_SUCCESS,
} from "./actionTypes";

// Course
export const getCourses = (dispatch) => {
  // Complete get Courses functionality here
  dispatch(CoursesRequestAction());
  axios
    .get(`https://octalogic-json-server.onrender.com/courses`)
    .then((res) => {
      dispatch(CoursesSuccessAction(res.data));
    })
    .catch(() => {
      dispatch(CoursesFailureAction());
    });
};
// COURSE ACTIONS
export const CoursesRequestAction = () => {
  return { type: GET_COURSE_REQUEST };
};

export const CoursesSuccessAction = (payload) => {
  return { type: GET_COURSE_SUCCESS, payload };
};

export const CoursesFailureAction = () => {
  return { type: GET_COURSE_FAILURE };
};


// Latest Enrollment
export const getLatestEnroll = (dispatch) => {
  // Complete get Latest Enrollment functionality here
  dispatch(LatestEnrollRequestAction());
  axios
    .get(`https://octalogic-json-server.onrender.com/latestEnrollment`)
    .then((res) => {
      dispatch(LatestEnrollSuccessAction(res.data));
    })
    .catch(() => {
      dispatch(LatestEnrollFailureAction());
    });
};



// ENROLLMENT ACTIONS
export const LatestEnrollRequestAction = () => {
  return { type: GET_LATESTENROLLMENT_REQUEST };
};

export const LatestEnrollSuccessAction = (payload) => {
  return { type: GET_LATESTENROLLMENT_SUCCESS, payload };
};

export const LatestEnrollFailureAction = () => {
  return { type: GET_LATESTENROLLMENT_FAILURE };
};