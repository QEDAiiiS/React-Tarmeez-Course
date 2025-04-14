
import { useContext } from "react"
import { inputsContext } from "../Context/inputsContext"

export default function InputDetails({inNamDetail, inFunDetail}){
    let inputContext = useContext(inputsContext)
    return(
        <input
        type="text"
        id="name"
        value={inputContext.inName}
        onChange={(event)=>{inputContext.inFun(event)}}
      />
    )
}