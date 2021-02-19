import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/AuthorAction";
import propTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses failed " + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed " + error);
      });
    }
  }, [props.course]);

  const handleSave = (event) => {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  return (
    <>
      <CourseForm
        course={course}
        errors={errors}
        authors={authors}
        onSave={handleSave}
        onChange={handleChange}
      />
    </>
  );
}

ManageCoursePage.propTypes = {
  authors: propTypes.array.isRequired,
  courses: propTypes.array.isRequired,
  loadCourses: propTypes.func.isRequired,
  loadAuthors: propTypes.func.isRequired,
  course: propTypes.object.isRequired,
  saveCourse: propTypes.func.isRequired,
  history: propTypes.object.isRequired,
};

function getCourseBySlug(courses, slug) {
  return (
    courses.find((course) => {
      return course.slug === slug;
    }) || null
  );
}

function mapStateToProps(state, ownProps) {
  // debugger;
  var slug = ownProps.match.params.slug;
  // console.log(slug, state.courses.length);
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;

  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
