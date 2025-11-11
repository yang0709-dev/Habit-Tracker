import "../css/submitgoals.css";

function SubmitGoals() {
  return (
    <div id="submit-container">
        <div id="submit-goals-text">
            Submit Your Goals
        </div>
        <div className="tasks-inputs">
            Task Name: <input type="text"></input>
        </div>
        <div className="tasks-inputs">
            Task Description: <input type="text"></input>
        </div>
    </div>
  );
}

export default SubmitGoals;
