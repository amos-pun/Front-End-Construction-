import { createStore } from "redux";
import counterReducer from "./CounterReducer";

export const myStore = createStore(counterReducer)