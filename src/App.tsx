import './App.css'
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {useEffect} from "react";
import {fetchUsers} from "./store/reducers/ActionCreators.ts";


function App() {
  const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(() => {
      dispatch(fetchUsers())
  }, [])
  return (
    <>
        {isLoading && <div>Идёт загрузка...</div>}
        {error && <div>{error}</div>}
        {JSON.stringify(users, null, 2)}
    </>
  )
}

export default App
