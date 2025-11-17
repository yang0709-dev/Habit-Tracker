import "../css/mainpage.css";
import SubmitGoals from "../components/SubmitGoals";
import { useState, useEffect } from "react";
import CompletionContextDummy from "../components/CompletionContextDummy";

function MainPage() {
  console.log(Object.entries(localStorage));
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(Object.keys(localStorage));
    localStorage.setItem("checked", 0);
  }, []);


  return (
    <div className="mainContainer">
      <CompletionContextDummy>
        
        
      </CompletionContextDummy>

      <hr className="hr-lines" />
      {<SubmitGoals addTask={(key) => setTasks((t) => [...t, key])} />}
    </div>
  );
}

export default MainPage;
