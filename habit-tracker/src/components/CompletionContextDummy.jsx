import { createContext,useState } from "react"
import Task from "./Task"
import CompletionRates from "./CompletionRates"


const CompletionContext = createContext(0)

function CompletionContextDummy(){
    const [tasks, setTasks] = useState([]);
    function handleDelete(k) {
        localStorage.removeItem(k);
        
        setTasks((tasks) => tasks.filter((keys) => keys !== k));
    }
    return <>
        <div className="taskContainer">
          {Object.entries(localStorage).map(([k, _]) => {
            if (k !== "checked") {
              return <Task key={k} task_key={k} remove={handleDelete} />;
            }
          })}
        </div>

        <hr className="hr-lines" />
        {<CompletionRates />}
    </>
}

export default CompletionContextDummy