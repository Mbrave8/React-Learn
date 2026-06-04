import './App.css'
import { useState } from 'react'
function App() {
  const [courseList, setCourseList] = useState([])
  const [newCourse, setNewCourse] = useState("")

  const handelChange = (event) => {
    setNewCourse(event.target.value)
  }

 

  const addCourse = () => {
    const course = {
      id: courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      courseName: newCourse
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
          return (<div key={`div_${index}`}>
            <h1 key={`h1${index}`}> {course.courseName} </h1>
            <button key={`btn${index}`} onClick={() => clear(course.id)}>clear</button>
          </div>
          )
        })}
      </div>
    </div >
  )
}
export default App;

