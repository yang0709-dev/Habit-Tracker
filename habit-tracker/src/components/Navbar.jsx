import "../css/navbar.css"

function Navbar(){
    return <div id="navbar">
        <div id="tilte">Habit Tracker</div>
        <div className="icons">
            <div className="text-and-logo">
                History
                <img src="../logos/history.png"></img>
            </div>
            <div className="deco-line"></div>
        </div>
        <div className="icons">
            <div className="text-and-logo">
                Charts
                <img src="../logos/charts.png"></img>
            </div>
            <div className="deco-line"></div>
        </div>
    </div> 
    
}

export default Navbar