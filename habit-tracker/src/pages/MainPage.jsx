import "../css/mainpage.css";
import SubmitGoals from "../components/SubmitGoals";
import { useState, useEffect } from "react";
import CompletionContextDummy from "../components/CompletionContextDummy";
import EndDay from "../components/EndDay";

function MainPage() {
  // console.log(Object.entries(localStorage));
  const [_, setTasks] = useState([]);

  useEffect(() => {
    setTasks(Object.keys(localStorage));
    localStorage.setItem("checked", 0);
  }, []);


  return (
    <div className="mainContainer">
      <CompletionContextDummy>
        
        
      </CompletionContextDummy>

      <hr className="hr-lines" />

      {/* 把原本的tasks展開後加上key addTask函式 */}
      {<SubmitGoals addTask={(key) => setTasks((t) => [...t, key])} />}
      <hr className="hr-lines" />
      <EndDay/>
    </div>
  );
}

export default MainPage;
