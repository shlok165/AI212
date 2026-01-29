import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <div className="card">
      <h2>Live Name Display</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default NameForm;
