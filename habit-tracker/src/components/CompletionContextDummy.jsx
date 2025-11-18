import { createContext,useState } from "react"
import Task from "./Task"
import CompletionRates from "./CompletionRates"

export const CompletionContext = createContext({ rate: 0, setRate: () => {} })

function CompletionContextDummy(){
    const [tasks, setTasks] = useState([]);
    function handleDelete(k) {
        localStorage.removeItem(k);

        setTasks((tasks) => tasks.filter((keys) => keys !== k));
    }
    
    let completed = Number(localStorage.getItem("checked"));
    let total = Number(Object.entries(localStorage).length-1);
    const [rate,setRate] = useState(completed/total*100)
    return <CompletionContext.Provider value={{rate,setRate}}>
        <div className="taskContainer">
          {Object.entries(localStorage).map(([k, _]) => {
            if (k !== "checked") {
              return <Task key={k} task_key={k} remove={handleDelete} />;
            }
          })}
        </div>

        <hr className="hr-lines" />
        {<CompletionRates />}
    </CompletionContext.Provider>
}

export default CompletionContextDummy