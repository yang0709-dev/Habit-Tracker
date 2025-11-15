import "../css/mainpage.css";
import SubmitGoals from "../components/SubmitGoals";
import CompletionRates from "../components/CompletionRates";
import { useState,useContext } from "react";
import { taskContext } from "../components/SubmitGoals";
import Task from "../components/Task";

function MainPage() {
  const tasks = useContext({taskContext})
  return (
    <div className="mainContainer">
      <div className="taskContainer">
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
