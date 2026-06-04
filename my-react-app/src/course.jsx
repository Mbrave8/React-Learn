const course = (props) => {
    return(
    <div>
        <h1> {props.course.courseName} </h1>
        <button onClick={() => props.clear(props.course.id)}>clear</button>
    </div>
    )
}

export default course