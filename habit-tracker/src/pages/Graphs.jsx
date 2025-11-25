import "../css/graphs.css";
import { keys, all,get,entries } from "../db/rateDB";
import { useEffect, useState } from "react";
import Bar from "../components/Bar";

function Graphs() {
  const [rates, setRates] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // 處理promise(還沒拿到的資料)


    keys().then(k=>{setDates(k)})

    // [rate, taskName, taskDesc]
    all().then(r=>{setRates(r)})
    
  }, []);

  


  return (
    <div id="GraphsContainer">
      <div id="GraphWrapper">
        <div id="Graph">
          {/* 確保只會render 7個Bar */}
          {rates.slice(0,7).map((r,i)=>{
            const rate = r[0]
            const id = "bar" + (i+1)
            const date = dates[i]     
            return <Bar key={id} id={id} rate={rate} date={date}/>
          })}
          
        </div>
        
      </div>
    </div>
  );
}

export default Graphs;
