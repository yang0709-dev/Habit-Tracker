function Task({name,desc}){
    return(
        <>
            <div className="taskWrapper">
                <div className="taskName">
                    <input type="checkbox"></input>{name}
                </div> 
                <div className="trashIcon">X</div>
                <div className="taskDesc">{desc}</div>
            </div>
        </>
    )
    
    
}

export default Task