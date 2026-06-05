const Course = (props) => {
    return (
        <div style={{
            backgroundColor:
                props.course.isCompleted ? "green" : "#16171d"
        }}>
            <h1> {props.course.courseName} </h1>
            <button onClick={() => props.clear(props.course.id)}>clear</button>
            <button onClick={() => props.CompleteCourse(props.course.id)}>Complete</button>
        </div>
    )
}

export default Course