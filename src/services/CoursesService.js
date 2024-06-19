import axios from "axios";
import { API_BASE_URL } from "../helpers/defaults";

export const getCourses = () => {
    return axios.get(
        `${API_BASE_URL}/courses`
    )
}

export const saveCourse = (course) => {
    return axios.post(
        `${API_BASE_URL}/courses`,
        course
    )
}