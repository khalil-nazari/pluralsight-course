import React from 'react'

class CoursesPage extends React.Component  {


    // State
    state = {
        course : {
            title: ''
        }
    }


    // state change
    handleChange = (e) => {
        const course = {...this.state.course, title: e.target.value}
        this.setState({course: course})
        
    }

    // Form submit 
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)

    }
    render() {
        return (
            <>
              <form onSubmit={this.handleSubmit}>
                    <h2>Courses</h2>
                    <h3>Add Course</h3>
                    <input 
                        type='text' 
                        onChange={this.handleChange} 
                        value={this.state.course.title}
                    />
                    <input type="submit" value="Save"/>
              </form>
            </>
        )
    }
}

export default CoursesPage