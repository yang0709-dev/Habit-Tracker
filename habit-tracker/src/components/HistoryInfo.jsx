import "../css/history.css"
import { handleHover } from "../functions/mouse_tracking";

function HistoryInfo({date,rate,tasks,handleMove}) {
  function handleMove(e){
    handleHover(e)
  }
  console.log(tasks)
    return (
    <div className="history" onMouseMove={(e) => handleHover(e)}>
      <div className="date">{date}</div>
      <div className="rate">{rate}%</div>
      <div className="history-info">
        <ul className="history-name">
            {tasks.map((v,_)=>{
                return <li className="name">{v}</li>
            })}
        </ul>
      </div>
    </div>
  );
}

export default HistoryInfo