import './App.css'
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {userSlice} from "./store/reducers/userSlice.ts";

function App() {
  const {count} = useAppSelector(state => state.userReducer)
  const {increment, decrement} = userSlice.actions
  const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement(10))}>-</button>
        <button onClick={() => dispatch(increment(10))}>+</button>
      </div>
    </>
  )
}

export default App
