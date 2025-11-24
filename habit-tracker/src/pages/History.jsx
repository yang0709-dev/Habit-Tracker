import "../css/history.css";
import { handleHover } from "../functions/mouse_tracking";
import { keys,all } from "../db/rateDB";
import { useState,useEffect } from "react";
import HistoryInfo from "../components/HistoryInfo";

export default function History() {
    const [dates,setDates] = useState([])
    const [info,setInfo] = useState([[]])
    
    useEffect(()=>{
        keys().then((k)=>setDates(k))
        

        // [rate, ...tasks]
        all().then((v)=>setInfo(v))

    },[])

  return (
    <div id="history-container">
      <div id="history-wrapper">
        {/* <div className="history" onMouseMove={(e) => handleHover(e)}> */}
        {dates.map((k,i)=>{
            const rate = info[i][0]
            const tasks = info[i].slice(1,info[i].length)
            const key = k+i
            return <HistoryInfo key={key} date={k} rate={rate} tasks={tasks} onMouseMove={(e) => handleMove(e)}/>
        })}
        
      </div>
    </div>
  );
}
