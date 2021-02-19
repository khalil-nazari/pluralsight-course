import * as actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi";

/************** ACTIONS  **************/
export function createCourse(course) {
  return {
    type: actionTypes.CREATE_COURSE,
    course,
  };
}

// action
export function loadCourseSuccess(courses) {
  return {
    type: actionTypes.LOAD_COURSES_SUCCESS,
    courses,
  };
}

// create course
export function createCoruseSuccess(course) {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course,
  };
}

// update course
export function updateCourseSuccess(course) {
  return {
    type: actionTypes.UPDATE_COURSE_SUCCESS,
    course,
  };
}

/**************** redux thunk  middleware ************* 

export function function_name(prop) {
  return function (dispatch) {
    return fucc().then().catch()
  }
} 

*/

// load course
export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}

// Add/Save Course
export function saveCourse(course) {
  return function (dispatch) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCoruseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
