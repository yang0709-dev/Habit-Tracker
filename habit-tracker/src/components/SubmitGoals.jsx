import "../css/submitgoals.css";
import { useState, useContext } from "react";
import { createContext } from "react";

export const taskContext = createContext(["", ""]);

function SubmitGoals() {
  const [tasks, setTasks] = useState(["", ""]);

  // set
  
  

  return (
    <div id="submit-container">
        <div id="submit-goals-text">Submit Your Goals</div>
        <div className="tasks-inputs">
          Name:{" "}
          <input
            type="text"
            className="inputs"
            id="taskName"
            onChange={(e) => (tasks[0] = e.target.value)}
          ></input>
        </div>
        <div className="tasks-inputs">
          Description:{" "}
          <input
            type="text"
            className="inputs"
            id="taskDesc"
            onChange={(e) => (tasks[1] = e.target.value)}
          ></input>
        </div>
        <button id="submit-button" onClick={console.log(tasks)}>
          Submit
        </button>
    </div>
  );
}

export default SubmitGoals;
