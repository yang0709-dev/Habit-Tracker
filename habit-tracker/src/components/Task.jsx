import { useState,useContext } from "react"
import { CompletionContext } from "./CompletionContextDummy"

function Task({task_key,remove}){
    const metaData = localStorage.getItem(task_key).split(',')
    const [checked,setChecked] = useState(false)
    const {rate,setRate} = useContext(CompletionContext)
    function handleCheck(e){
        if (localStorage.getItem('checked') === null){
            localStorage.setItem('checked',0)
        }

        let checkedCount = Number(localStorage.getItem('checked'))
        // unchecking the checkbox
        if (e.target.checked===false){
            setChecked(false)
            localStorage.setItem('checked',checkedCount-1)
            let completed = Number(localStorage.getItem("checked"));
            let total = Number(Object.entries(localStorage).length);
            setRate(completed/total*100);
        }

        // checking the checkbox
        else{
            setChecked(true)
            localStorage.setItem('checked',checkedCount+1)
            let completed = Number(localStorage.getItem("checked"));
            let total = Number(Object.entries(localStorage).length);
            setRate(completed/total*100)
        }
    }

    function handleClose(){
        if (checked){
            let checkedCount = Number(localStorage.getItem('checked'))
            localStorage.setItem('checked',checkedCount-1)
        }
        remove(task_key)
        let completed = Number(localStorage.getItem("checked"));
        let total = Number(Object.entries(localStorage).length);
        setRate(completed/total*100)
    }

    return(
        <>
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox" className="task-checkbox" onClick={(e)=>handleCheck(e)}></input>{metaData[0]}
                </div> 
                <div className="trashIcon" onClick={()=>handleClose()}>X</div>
                <div className="taskDesc">{metaData[1]}</div>
            </div>
        </>
    )
    
    
}

export default Task