// History頁面裡 hover到className="history"的div上面的時候 讓history_info跟著滑鼠

export function handleHover(e){
    const history = e.currentTarget
    const history_info = history.querySelector(".history-info")
    
    document.body.onpointermove = event =>{
        // event回傳 hash table, 其中clientX跟clientY是鼠標在的位置
        const {clientX,clientY} = event
        history_info.animate({

            // 折衷解法
            left:`${clientX/2}px`,
            top:`${clientY/2}px`
        },{duration:1000,fill:"forwards"})
    }

    history.onpointerleave = () =>{
        history.onpointermove = null
    }
}