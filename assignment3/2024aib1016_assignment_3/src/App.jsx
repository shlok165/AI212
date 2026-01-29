import "./App.css";
import Student from "./components/Student";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import NameForm from "./components/NameForm";

function App() {
  return (
    <div>
      <h1>ES6 & React Assignment</h1>

      <Student
        name="Shlok Vaidya"
        rollNumber="AI-212"
        branch="AI & DE"
      />

      <Counter />
      <Toggle />
      <NameForm />
    </div>
  );
}

export default App;
