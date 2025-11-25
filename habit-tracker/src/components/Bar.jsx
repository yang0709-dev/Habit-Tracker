import { useEffect } from "react";
import "../css/graphs.css";

function Bar({ id, rate, date }) {

  // 根據傳進來的rate改變bar的高度
  function change_bar_height(bar_id, bar_rate) {
    const bar = document.getElementById(bar_id);
    bar.style.height = String(bar_rate) + "%";
  }


  // useEffect在DOM渲染後執行
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
