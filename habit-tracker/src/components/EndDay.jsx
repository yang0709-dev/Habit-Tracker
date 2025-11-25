import "../css/endday.css";
import { set } from "../db/rateDB";

export default function EndDay() {
  function handleCancel() {
    const trans = document.getElementById("transparent-layer")
    trans.style.visibility = "hidden"
  }
  function handleEnd(){
    const trans = document.getElementById("transparent-layer")
    trans.style.visibility = "visible"
  }

  async function handleConfirm(){
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    
    let d = month + "/" + day
    

    let completed = Number(localStorage.getItem("checked"));
    let total = Number(Object.entries(localStorage).length-1);
    let rate = (completed/total)*100

    let res = []
    let tasks = []

    Object.entries(localStorage).forEach(([k,v])=>{
        if (k != 'checked' && k!='key'){

          // v="["Name","Desc"]" (JSON.Stringify)
          // JSON.parse用來把這種stringify的string轉成array
          let taskName = JSON.parse(v)[0]


          tasks.push(taskName)
        }
    })
    
    
    res=[rate,...tasks]


    await set(d,res)

    // 顯示確定界面
    const trans = document.getElementById("transparent-layer")
    trans.style.visibility = "hidden"
  }

  return (
    <>
      <div id="end-day-button" onClick={()=>handleEnd()}>End Day</div>
      <div id="transparent-layer">
        <div id="confirm-wrapper">
          <div id="exclamation">!</div>
          <div id="confirm-message">
            <div id="ending">
              Ending the day will reset all of the tasks you submited.
            </div>
            <div id="are">Are you sure you want to continue?</div>
          </div>
          <div id="confirm-buttons">
            <div
              className="yes-no-btn"
              id="cancel-btn"
              onClick={() => handleCancel()}
            >
              Cancel
            </div>
            <div className="yes-no-btn" id="confirm-btn" onClick={()=>handleConfirm()}>
              Confirm
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
