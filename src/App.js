import { Provider } from "react-redux";
import MyRoutes from "./MyRoutes";
// import { myStore } from "./Components/hooks/reducer/Store";
// import { combineReducers, createStore } from "redux";
// import GameReducer from "./Components/hooks/reducer/GameReduer";
// import counterReducer from "./Components/hooks/reducer/CounterReducer";
import { store } from "./Components/reducer/store";
import './index.css'

function App() {

  // this is combine reducer ..
  // const rootReducer = combineReducers({
  //   game: GameReducer,
  //   count: counterReducer
  // })
  
  // // const myStore = createStore(GameReducer)

  // const myStore = createStore(rootReducer)
  
  return (
    <Provider store={store}>
        <MyRoutes/>
    </Provider>
  )
}

export default App;
