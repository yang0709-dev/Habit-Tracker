import { useEffect } from "react";
import "../css/graphs.css";

function Bar({ id, rate }) {
  function change_bar_height(bar_id, bar_rate) {
    const bar = document.getElementById(bar_id);
    bar.style.height = String(bar_rate) + "%";
  }

  useEffect(()=>{
    change_bar_height(id,rate)
  },[rate])

  return <div id={id} className="bar"></div>;
}

export default Bar;
