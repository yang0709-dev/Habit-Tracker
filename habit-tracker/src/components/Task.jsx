import { useState,useContext } from "react"
import { CompletionContext } from "./CompletionContextDummy"

function Task({task_key,remove}){
    // data = "["Name","Desc"]" (JSON.Stringify)
    const data = JSON.parse(localStorage.getItem(task_key))
    
    const taskName = data[0]
    const taskDesc = data[1]


    const [checked,setChecked] = useState(false)
    const {_,setRate} = useContext(CompletionContext)

    function handleCheck(e){

        // 初始化localStorage裡面的checked
        if (localStorage.getItem('checked') === null){
            localStorage.setItem('checked',0)
        }

        let checkedCount = Number(localStorage.getItem('checked'))

        
        // unchecking the checkbox
        if (e.target.checked===false){
            setChecked(false)
            localStorage.setItem('checked',checkedCount-1)
            let completed = Number(localStorage.getItem("checked"));
            let total = Number(Object.entries(localStorage).length-1);
            setRate(completed/total*100);
        }

        // checking the checkbox
        else{
            setChecked(true)
            localStorage.setItem('checked',checkedCount+1)
            let completed = Number(localStorage.getItem("checked"));
            let total = Number(Object.entries(localStorage).length-1);
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
        let total = Number(Object.entries(localStorage).length-1);
        setRate(completed/total*100)
    }

    return(
        <>
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox" className="task-checkbox" onClick={(e)=>handleCheck(e)}></input>{taskName}
                </div> 
                <div className="trashIcon" onClick={()=>handleClose()}>X</div>
                <div className="taskDesc">{taskDesc}</div>
            </div>
        </>
    )
    
    
}

export default Task