import { useState } from "react"

function Task({task_key,remove}){

    const metaData = localStorage.getItem(task_key).split(',')

    return(
        <>
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox"></input>{metaData[0]}
                </div> 
                <div className="trashIcon" onClick={()=>remove(task_key)}>X</div>
                <div className="taskDesc">{metaData[1]}</div>
            </div>
        </>
    )
    
    
}

export default Task