function Student(props) {
  return (
    <div className="card">
      <h2>Student Details</h2>
      <p>Name: {props.name}</p>
      <p>Roll No: {props.rollNumber}</p>
      <p>Branch: {props.branch}</p>
    </div>
  );
}

export default Student;
