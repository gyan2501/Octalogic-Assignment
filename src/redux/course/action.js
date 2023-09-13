import axios from "axios";
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

// Best Student

export const getBestStudents = (dispatch) => {
  // Complete get Best Students functionality here
  dispatch(BestStudentsRequestAction());
  axios
    .get(`https://octalogic-json-server.onrender.com/bestStudents`)
    .then((res) => {
      dispatch(BestStudentsSuccessAction(res.data));
    })
    .catch(() => {
      dispatch(BestStudentsFailureAction());
    });
};

// ENROLLMENT ACTIONS
export const BestStudentsRequestAction = () => {
  return { type: GET_BESTSTUDENTS_REQUEST };
};

export const BestStudentsSuccessAction = (payload) => {
  return { type: GET_BESTSTUDENTS_SUCCESS, payload };
};

export const BestStudentsFailureAction = () => {
  return { type: GET_BESTSTUDENTS_FAILURE };
};
