import "../css/mainpage.css";
import SubmitGoals from "../components/SubmitGoals";
import CompletionRates from "../components/CompletionRates";
import { useState, useContext, useEffect } from "react";
import { taskContext } from "../components/SubmitGoals";
import CompletionContextDummy from "../components/CompletionContextDummy";
import Task from "../components/Task";

function MainPage() {
  console.log(Object.entries(localStorage));
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(Object.keys(localStorage));
    localStorage.setItem("checked", 0);
  }, []);

  function handleDelete(k) {
    localStorage.removeItem(k);
    setTasks((tasks) => tasks.filter((keys) => keys !== k));
  }

  return (
    <div className="mainContainer">
      <CompletionContextDummy>
        
        <div className="taskContainer">
          {Object.entries(localStorage).map(([k, _]) => {
            if (k !== "checked") {
              return <Task key={k} task_key={k} remove={handleDelete} />;
            }
          })}
        </div>

        <hr className="hr-lines" />
        {<CompletionRates />}
      </CompletionContextDummy>

      <hr className="hr-lines" />
      {<SubmitGoals addTask={(key) => setTasks((t) => [...t, key])} />}
    </div>
  );
}

export default MainPage;
