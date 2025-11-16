import { useState } from "react"

function Task({task_key}){
    function remove_task(){
        localStorage.removeItem(task_key)
    }

    const metaData = localStorage.getItem(task_key).split(',')

    return(
        <>
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox"></input>{metaData[0]}
                </div> 
                <div className="trashIcon" onClick={()=>remove_task()}>X</div>
                <div className="taskDesc">{metaData[1]}</div>
            </div>
        </>
    )
    
    
}

export default Task