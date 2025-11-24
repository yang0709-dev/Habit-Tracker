import { useEffect } from "react";
import "../css/graphs.css";

function Bar({ id, rate, date }) {
  function change_bar_height(bar_id, bar_rate) {
    const bar = document.getElementById(bar_id);
    bar.style.height = String(bar_rate) + "%";
  }

  useEffect(()=>{
    change_bar_height(id,rate)
  },[rate])

  return (
    <div className="bar-info">
        <div id={id} className="bar"></div>
        {date}
    </div>
  )
  
  
    

}

export default Bar;
