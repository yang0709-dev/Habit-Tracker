import "../css/completion.css";
import { useEffect,useState,useContext } from "react";
import { CompletionContext } from "./CompletionContextDummy";

function CompletionRates() {
    const {rate,_} = useContext(CompletionContext)
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

        // 元件不再渲染就移除EventListener
        return () => window.removeEventListener('storage',updateRates)
    },[])

  return (
    <div id="completion-container">
      <div id="completion-text">Completed: </div>
      <div>{rate}%</div>
    </div>
  );
}

export default CompletionRates;
