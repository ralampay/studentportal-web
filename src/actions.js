// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UPDATE_STUDENT_COUNT = 'UPDATE_STUDENT_COUNT';
export const UPDATE_COURSE_COUNT = 'UPDATE_COURSE_COUNT';

// Action Creators
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})

export const updateStudentCount = (count) => ({
    type: UPDATE_STUDENT_COUNT,
    count: count
})

export const updateCourseCount = (count) => ({
    type: UPDATE_COURSE_COUNT,
    count: count
})