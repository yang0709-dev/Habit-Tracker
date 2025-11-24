export function handleHover(e){
    const history = e.currentTarget
    const history_info = history.querySelector(".history-info")
    // console.log(history_info)
    
    document.body.onpointermove = event =>{
        const {clientX,clientY} = event
        history_info.animate({
            left:`${clientX/2}px`,
            top:`${clientY/2}px`
        },{duration:1000,fill:"forwards"})
    }

    history.onpointerleave = () =>{
        history.onpointermove = null
    }
}