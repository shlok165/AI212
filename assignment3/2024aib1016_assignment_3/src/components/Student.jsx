function Student(props) {
  return (
    <div
      className="card"
      style={{
        border: "2px solid #007bff",
        backgroundColor: "#eaf3ff"
      }}
    >
      <h2 style={{ color: "#007bff" }}>Student Details</h2>

      <p>Name: {props.name}</p>
      <p>Roll No: {props.rollNumber}</p>
      <p>Branch: {props.branch}</p>
    </div>
  );
}

export default Student;
