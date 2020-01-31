import { combineReducers } from "redux"
import clothesReducer from "./clothesReducer"

const rootReducer = combineReducers({
  frozen: clothesReducer
})

export default rootReducer