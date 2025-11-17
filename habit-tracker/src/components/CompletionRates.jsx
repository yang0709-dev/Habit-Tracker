import "../css/completion.css";
import React,{ useEffect,useState,createContext } from "react";

function CompletionRates() {

    const [total,setTotal] = useState(0)
    const [complete,setComplete] = useState(0)

    function updateRates() {
            let completed = Number(localStorage.getItem("checked"));
            let all = Number(Object.entries(localStorage).length);
            if (localStorage.getItem("checked") !== null) {
            all -= 1;
            setTotal(all)
            setComplete(completed)
        }
    }

    useEffect(()=>{
        updateRates()
        window.addEventListener('storage',updateRates)
        const rateContext = React.createContext(complete/total*100)
        return () => window.removeEventListener('storage',updateRates)
    },[])

  return (
    <div id="completion-container">
      <div id="completion-text">Completion Rate: </div>
      <div>{complete/total*100}%</div>
    </div>
  );
}

export default CompletionRates;
