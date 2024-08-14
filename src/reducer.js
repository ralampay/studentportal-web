import { INCREMENT, DECREMENT, UPDATE_COURSE_COUNT } from "./actions"

const initialState = {
    count: 0,
    courseCount: 0
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
    } else if (action.type == UPDATE_COURSE_COUNT) {
        return {
            ...state,
            courseCount: action.count
        }
    } else {
        return state;
    }
}