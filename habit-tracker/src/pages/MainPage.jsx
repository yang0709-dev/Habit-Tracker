import "../css/mainpage.css";
import SubmitGoals from "../components/SubmitGoals";
import CompletionRates from "../components/CompletionRates";
import { useState,useContext } from "react";
import { taskContext } from "../components/SubmitGoals";
import Task from "../components/Task";
import { get_Tasks_Keys,get_Tasks } from "../db/tasksDB";

function MainPage() {
  const tasks = useContext({taskContext})
  async function test(){
    return (await get_Tasks_Keys)
  }

  
  return (
    <div className="mainContainer">
      <div className="taskContainer" onClick={console.log(test())}>
        {<Task name="hi" desc="saying hello"/>}
      </div>
      <hr className="hr-lines" />
      {<CompletionRates />}

      <hr className="hr-lines" />
      {<SubmitGoals />}
    </div>
  );
}

export default MainPage;
