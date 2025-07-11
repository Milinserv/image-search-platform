import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./store/image/imageSlice.ts";

function App() {
    const count = useSelector((state: any) => state.image.value);
    const dispatch = useDispatch();

  return (
    <>
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </>
  )
}

export default App
