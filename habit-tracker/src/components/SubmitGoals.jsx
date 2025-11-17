import "../css/submitgoals.css";
import { useState, useContext } from "react";
import { createContext } from "react";
import { CompletionContext } from "./CompletionContextDummy";
export const taskContext = createContext(["", ""]);


function SubmitGoals({addTask}) {
  const [tasks, setTasks] = useState(["", ""]);
  const {rate,setRate} = useContext(CompletionContext)

  // 處理localStorage裡面的"key"裡面的數值
  if (localStorage.getItem("key") === null) {
    localStorage.setItem("key", 0);
  }

  function set_Keys(val) {
    localStorage.setItem("key", val);
    let completed = Number(localStorage.getItem("checked"));
    let total = Number(Object.entries(localStorage).length);
    setRate(completed/total*100)
  }

  function get_Keys() {
    return localStorage.getItem("key");
  }



  function set_Tasks(key,val){
    localStorage.setItem(key,val)
    addTask(key)
  }

  

  async function handleSubmit() {
    // assigning new key to the keysDB
    const taskName = document.getElementById('taskName')
    const taskDesc = document.getElementById('taskDesc')
    if (taskName.value != '' && taskDesc.value != ''){

      // 預設是存string
      let tasks_key = Number(get_Keys());
      tasks_key += 1;

      // 把新的key存到localStorage, 之後才能根據這個key存新東西
      set_Keys(tasks_key);
      

      // save the [name,desc] to localStorage
      set_Tasks(tasks_key,tasks)

      taskName.value = ''
      taskDesc.value = ''
    }
    
  }

  return (
    <div id="submit-container">
      <div id="submit-goals-text">Submit Your Goals</div>
      <form id="submit-form">
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
        <button type="button" id="submit-button" onClick={() => {handleSubmit();}}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubmitGoals;
