import "../css/navbar.css"

function Navbar(){
    return <div id="navbar">
        <div id="tilte">Habit Tracker</div>
        <div className="icon-wrapper">
            <div className="icons">
                <div className="text">
                    History
                </div>
                <div className="deco-line"></div>
            </div>
                <div className="icons">
                    <div className="text">
                        Charts
                    </div>
                <div className="deco-line"></div>
            </div>
        </div>
        
    </div> 
    
}

export default Navbar