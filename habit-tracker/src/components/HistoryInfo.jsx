import "../css/history.css"
import { handleHover } from "../functions/mouse_tracking";

function HistoryInfo({date,rate,tasks}) {

    return (
    <div className="history" onMouseMove={(e) => handleHover(e)}>
      <div className="date">{date}</div>
      <div className="rate">{rate}%</div>
      <div className="history-info">
        <ul className="history-name">
            {tasks.map((v,i)=>{
                return <li className="name" key={i}>{v}</li>
            })}
        </ul>
      </div>
    </div>
  );
}

export default HistoryInfo