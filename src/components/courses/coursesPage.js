import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/AuthorAction";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";

class CoursesPage extends React.Component {
  // State
  state = {
    redirectToAddCoursePage: false,
  };

  // Computer Mounted
  componentDidMount() {
    let { actions, courses, authors } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed " + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed " + error);
      });
    }
  }

  // Render JSX
  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        <button
          className="btn btn-primary my-2"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

// PropTypes
CoursesPage.propTypes = {
  authors: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
  courses: propTypes.array.isRequired,
};

// Map state to props
function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

// Map Dispatch to Props
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

// export the component
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
