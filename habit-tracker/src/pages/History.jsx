import "../css/history.css";
import { handleHover } from "../functions/mouse_tracking";

export default function History() {
  return (
    <div id="history-container">
      <div id="history-wrapper">
        <div className="history" onMouseMove={(e) => handleHover(e)}>
            <div className="date">
                Nov 19
            </div>
            <div className="rate">
                25%
            </div>
            <div className="history-info" >
                <ul className="history-name">
                    <li className="name">code</li>
                    <li className="name">run</li>
                </ul>
                
            </div>
        </div>

        <div className="history" onMouseMove={(e) => handleHover(e)}>
            <div className="date">
                Nov 20
            </div>
            <div className="rate">
                50%
            </div>
            <div className="history-info" >
                <ul className="history-name">
                    <li className="name">walk</li>
                    <li className="name">run</li>
                </ul>
                
            </div>
        </div>
      </div>
    </div>
  );
}
