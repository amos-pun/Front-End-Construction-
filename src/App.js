import { Provider } from "react-redux";
import MyRoutes from "./MyRoutes";
// import { myStore } from "./Components/hooks/reducer/Store";
import { combineReducers, createStore } from "redux";
import GameReducer from "./Components/hooks/reducer/GameReduer";
import counterReducer from "./Components/hooks/reducer/CounterReducer";
import './index.css'

function App() {

  // this is combine reducer ..
  const rootReducer = combineReducers({
    game: GameReducer,
    count: counterReducer
  })
  
  // const myStore = createStore(GameReducer)

  const myStore = createStore(rootReducer)
  
  return (
    <Provider store={myStore}>
      <MyRoutes/>
    </Provider>
  )
}

export default App;
