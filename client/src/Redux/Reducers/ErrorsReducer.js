import { CLEARERRORS, HANDLEERRORS } from "../ActionsTypes/ErrorsTypes"

const initialState = []


const ErrorsReducer=(state = initialState, action)=>{
    switch (action.type) {
        case HANDLEERRORS : return [...state, action.payload]
        case CLEARERRORS : return state.filter((el,i,t)=> el.id != action.payload)
        default: return state
    }
}

export default ErrorsReducer