import "../css/submitgoals.css";
import { useState, useContext } from "react";
import { createContext } from "react";
export const taskContext = createContext(["", ""]);
import { get_Keys,set_Keys } from "../db/keysDB";
import { set_Tasks } from "../db/tasksDB";

function SubmitGoals() {
  const [tasks, setTasks] = useState(["", ""]);


  async function handleSubmit(){
    // assigning new key to the keysDB
    let key = await get_Keys()
    key+=1
    await set_Keys(key)

    // save the [name,desc] to the tasksDB
    await set_Tasks(tasks,key)
  }
  

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
        <button id="submit-button" onClick={handleSubmit()}>
          Submit
        </button>
    </div>
  );
}

export default SubmitGoals;
