import "../css/mainpage.css"
import SubmitGoals from "../components/SubmitGoals"
import CompletionRates from "../components/CompletionRates"


function MainPage(){
    return <div className="mainContainer">
        
        <div className="taskContainer">
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox"></input>code
                </div> 
                <div className="trashIcon">🗑️</div>
                <div className="taskDesc"></div>
            </div>
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox"></input>run
                </div>
                <div className="trashIcon">🗑️</div>
                <div className="taskDesc">fudsnmvucxnvjuunmjbnuihbguidbjj</div>
            </div>
            
        </div>
        <hr className="hr-lines"/>
        {<CompletionRates/>}
        
        <hr className="hr-lines"/>
        {<SubmitGoals/>}
    </div>
    
}

export default MainPage