import './App.css'
import { useState } from 'react'
import Course from './Course'
function App() {
  const [courseList, setCourseList] = useState([])
  const [newCourse, setNewCourse] = useState("")

  const handelChange = (event) => {
    setNewCourse(event.target.value)
  }

  const CompleteCourse = (courseId) => {
    const newCourseList = courseList.map((course) => {
      if (course.id === courseId) return { ...course, isCompleted: !course.isCompleted }
      else return (course)
    })
    setCourseList(newCourseList)
  }

  const addCourse = () => {
    const course = {
      id: courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      courseName: newCourse,
      isCompleted: false
    }
    setCourseList([...courseList, course])
    console.log(courseList)
  }
  const clear = (courseId) => {
    setCourseList(courseList.filter((course) =>
      courseId !== course.id
    ))
  }

  return (
    <div className="hero">
      <div className='add-course'>
        <input placeholder='type to save' type="text" onChange={handelChange} />
        <button onClick={addCourse}>add course</button>
      </div>
      <div className='list'>
        {courseList.map((course, index) => {
          return (
            <Course key={index} course={course} clear={clear}
              CompleteCourse={CompleteCourse}
            />
          )
        })}
      </div>
    </div >
  )
}
export default App;

