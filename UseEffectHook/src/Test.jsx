import { useState } from "react"

function Test(){
    const [count, setCount] = useState(0);

    return(
        <>
        <button onClick={()=>{}}>Count:{count}</button>
        </>
    )
}