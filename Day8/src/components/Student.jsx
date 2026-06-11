import PropType from 'prop-types'
function Student(props){
    return (
        <div>
            <h2>Student Details</h2>
            <p> Name:{props.name}</p>
            <p> Age:{props.age}</p>
        </div>
    )
}
Student.propTypes = {
    name:PropType.string,
    age:PropType.number
}
export default Student;