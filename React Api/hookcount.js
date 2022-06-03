
import React,{useState} from 'react'

 function Hookcount() {
    const init=0;
    const [count,setCount]=useState(init)

    const Increasebyfour=()=>{
        for (let i=0;i<4;i++){
            setCount(prevCount=>prevCount+1)
        }
    }

    const Decreasebyfour=()=>{
        for (let i=0;i<4;i++){
            setCount(prevCount=>prevCount-1)
        }
    }
  return (
    <div>
        Count : {count}
        <button onClick={()=>setCount(init)}>Reset</button>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increase</button>
        <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrease</button>
        <button onClick={Increasebyfour}>Increase by Four</button>
        <button onClick={Decreasebyfour}>Decrease by Four</button>
    </div>
  )
}
export default Hookcount