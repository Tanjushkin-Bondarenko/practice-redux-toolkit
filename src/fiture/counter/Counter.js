import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount} from "./counterSlice";
import { useState } from "react";
import './style.css'

const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = ()=>{
        setIncrementAmount(0);
        dispatch(reset())
    }
    

  return (
    <section>
      <div className="count">{count}</div>
      <div>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
     </div>
   
      <input className="amount" type="text"
      value={incrementAmount}
      onChange={(e)=>setIncrementAmount(e.target.value)}/>
    <div>
      <button onClick={()=> dispatch(incrementByAmount(addValue))}>add amount</button>
      <button onClick={resetAll}>Reset All</button>
     </div>
    </section>
  );
}

export default Counter;
