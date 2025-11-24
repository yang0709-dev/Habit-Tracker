import "../css/graphs.css";
import { keys, all,get,entries } from "../db/rateDB";
import { useEffect, useState } from "react";
import Bar from "../components/Bar";

function Graphs() {
  const [rates, setRates] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    keys().then(k=>{setDates(k)})

    // [rate, taskName, taskDesc]
    all().then(r=>{setRates(r)})
    
  }, []);

  


  return (
    <div id="GraphsContainer">
      <div id="GraphWrapper">
        <div id="Graph">
          {rates.map((r,i)=>{
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
