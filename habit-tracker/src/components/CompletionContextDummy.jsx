import { createContext } from "react"
import Task from "./Task"
import CompletionRates from "./CompletionRates"


const CompletionContext = createContext(0)

function CompletionContextDummy(){
    return <></>
}

export default CompletionContextDummy