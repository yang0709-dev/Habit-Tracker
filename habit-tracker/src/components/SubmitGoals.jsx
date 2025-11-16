import "../css/submitgoals.css";
import { useState, useContext } from "react";
import { createContext } from "react";
export const taskContext = createContext(["", ""]);

function SubmitGoals() {
  const [tasks, setTasks] = useState(["", ""]);

  if (localStorage.getItem("key") === null) {
    localStorage.setItem("key", 0);
  }

  function set_Keys(val) {
    localStorage.setItem("key", val);
  }

  function get_Keys() {
    return localStorage.getItem("key");
  }

  async function handleSubmit() {
    // assigning new key to the keysDB
    const taskName = document.getElementById('taskName')
    const taskDesc = document.getElementById('taskDesc')
    if (taskName.value != '' && taskDesc.value != ''){
      console.log(' fdsadfsdafsdfas')
      let tasks_key = Number(get_Keys());
      tasks_key += 1;
      set_Keys(tasks_key);
      taskName.value = ''
      taskDesc.value = ''

      // save the [name,desc] to the tasksDB
      await set_Tasks(tasks, tasks_key);
    }
    
  }

  return (
    <div id="submit-container">
      <div id="submit-goals-text">Submit Your Goals</div>
      <form>
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
        <button type="button" id="submit-button" onClick={(e) => {handleSubmit();}}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubmitGoals;
