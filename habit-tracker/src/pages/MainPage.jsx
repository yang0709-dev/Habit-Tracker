import "../css/mainpage.css";
import SubmitGoals from "../components/SubmitGoals";
import CompletionRates from "../components/CompletionRates";
import { useState,useContext } from "react";
import { taskContext } from "../components/SubmitGoals";

function MainPage() {
  const tasks = useContext({taskContext})
  return (
    <div className="mainContainer">
      <div className="taskContainer">
        <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox"></input>code
                </div> 
                <div className="trashIcon">X</div>
                <div className="taskDesc"></div>
            </div>
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox"></input>run
                </div>
                <div className="trashIcon">X</div>
                <div className="taskDesc">fudsnmvucxnvjuunmjbnuihbguidbjj</div>
            </div>
        
        {/* {tasks.map((task,i) => (
          (
            <div className="taskWrapper" key={i}>
              <div className="taskName">
                <input type="checkbox"></input>
                <div className="trashIcon">🗑️</div>
                
                
              </div>
              dfsfsdfsdfsdfsdfdsfdsfdsfsdfsd{task[0]}
              <div className="taskDesc">{task[1]}</div>
            </div>
          )
          
        ))} */}
      </div>
      <hr className="hr-lines" />
      {<CompletionRates />}

      <hr className="hr-lines" />
      {<SubmitGoals />}
    </div>
  );
}

export default MainPage;
