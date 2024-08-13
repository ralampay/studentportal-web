import { INCREMENT, DECREMENT } from "./actions"

const initialState = {
    count: 0
}

export default counterReducer = (state = initialState, action) => {
    if (action.type == INCREMENT) {
        return {
            ...state,
            count: state.count + 1
        }
    } else if (action.type == DECREMENT) {
        return {
            ...state,
            count: state.count - 1
        }
    } else {
        return state;
    }
}