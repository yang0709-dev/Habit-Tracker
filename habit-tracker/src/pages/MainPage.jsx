import "../css/mainpage.css"
import SubmitGoals from "../components/SubmitGoals"

function MainPage(){
    return <div className="mainContainer">
        <div id="tilte">Habit Tracker</div>
        <div className="taskContainer">
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox"></input>code
                </div> 
                <div className="taskDesc"> hey ajdfsuij fasduijfadiojfioads djfioajfoi djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj djfioajfoi ajoidsfj  ajoidsfj aoisdfjioADHFnpa dsnhfuihaduifohna douihfnouidahfuiaohfduiahifuoadhfiuoashioufhdaoi</div>
            </div>
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox"></input>run
                </div>
                <div className="taskDesc">fudsnmvucxnvjuunmjbnuihbguidbjj</div>
            </div>
            
        </div>
        <hr className="hr-lines"/>
        {<SubmitGoals/>}
    </div>
    
}

export default MainPage