import { combineReducers } from "redux"
import clothesReducer from "./clothesReducer"

const rootReducer = combineReducers({
  sportsWear: clothesReducer
})

export default rootReducer