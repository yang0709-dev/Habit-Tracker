import "../css/mainpage.css"
import SubmitGoals from "../components/SubmitGoals"

function MainPage(){
    return <div className="mainContainer">
        <div id="tilte">Habit Tracker</div>
        <div className="taskContainer">
            <div className="taskWrapper">
                <input type="checkbox"></input>code
                <div className="taskDesc">goated project that helps you navigate through websites very </div>
            </div>
            <div className="taskWrapper">
                <input type="checkbox"></input>run
                <div className="taskDesc">fudsnmvucxnvjuunmjbnuihbguidbjj</div>
            </div>
            
        </div>
        <hr className="hr-lines"/>
        {<SubmitGoals/>}
    </div>
}

export default MainPage