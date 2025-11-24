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
            console.log(rate,id)      
            return <Bar key={id} id={id} rate={rate}/>
          })}
          
        </div>
        <div id="Dates">
          <div id="date1" className="date-info">
            adfjiadfsj
          </div>
          <div id="date2" className="date-info">
            LMFLKdfadf
          </div>
          <div id="date3" className="date-info">
            dfasdaf
          </div>
          <div id="date4" className="date-info">
            cvcbv
          </div>
          <div id="date5" className="date-info">
            bcvbcbvc
          </div>
          <div id="date6" className="date-info">
            cbvvbcb
          </div>
          <div id="date7" className="date-info">
            uytyu
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;
