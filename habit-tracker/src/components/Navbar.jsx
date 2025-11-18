import "../css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="navbar">
      <div id="tilte">Habit Tracker</div>
      <div className="icon-wrapper">
        <div className="icons">
          <Link className="text" to={"/"}>
            Home
          </Link>
          <div className="deco-line"></div>
        </div>

        <div className="icons">
          <Link className="text" to={"/History"}>
            History
          </Link>
          <div className="deco-line"></div>
        </div>
        <div className="icons">
          <Link className="text" to={"/Graphs"}>
            Charts
          </Link>
          <div className="deco-line"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
