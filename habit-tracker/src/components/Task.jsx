import { useState } from "react"

function Task({task_key,remove}){
    const metaData = localStorage.getItem(task_key).split(',')
    function handleCheck(e){
        if (localStorage.getItem('checked') === null){
            localStorage.setItem('checked',0)
        }

        let checkedCount = Number(localStorage.getItem('checked'))
        // unchecking the checkbox
        if (e.target.checked===false){
            localStorage.setItem('checked',checkedCount-1)
        }

        // checking the checkbox
        else{
            localStorage.setItem('checked',checkedCount+1)
        }
    }

    return(
        <>
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox" className="task-checkbox" onClick={(e)=>handleCheck(e)}></input>{metaData[0]}
                </div> 
                <div className="trashIcon" onClick={()=>remove(task_key)}>X</div>
                <div className="taskDesc">{metaData[1]}</div>
            </div>
        </>
    )
    
    
}

export default Task