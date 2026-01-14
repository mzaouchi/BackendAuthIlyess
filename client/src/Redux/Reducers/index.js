import ErrorsReducer from "./ErrorsReducer";
import UserReducer from "./UserReducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers({UserReducer, ErrorsReducer})

export default rootReducer