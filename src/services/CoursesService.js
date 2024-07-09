import axios from "axios";
import {
    API_BASE_URL
} from "env";

export const getCourses = (args) => {
    return axios.get(
        `${API_BASE_URL}/courses`
    )
}

export const getCourse = (id) => {
    return axios.get(
        `${API_BASE_URL}/courses/${id}`
    )
}