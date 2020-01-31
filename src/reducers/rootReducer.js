import { combineReducers } from "redux"
import clothesReducer from "./clothesReducer"
import shoesReducer from "./shoesReducer"
import accessoriesReducer from "./accessoriesReducer"

const rootReducer = combineReducers({
  clothes: clothesReducer,
  shoes: shoesReducer,
  accessories: accessoriesReducer
})

export default rootReducer