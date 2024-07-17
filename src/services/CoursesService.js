import axios from "axios";
import {
    API_BASE_URL
} from "env";
import { buildAuthorizedHeaders } from "../helpers/AppHelper";

export const getCourses = (args) => {
    return axios.get(
        `${API_BASE_URL}/courses`,
        {
            headers: buildAuthorizedHeaders()
        }
    )
}

export const getCourse = (id) => {
    return axios.get(
        `${API_BASE_URL}/courses/${id}`
    )
}

export const saveCourse = (course) => {
    if (course.id) {
        return axios.put(
            `${API_BASE_URL}/courses/${course.id}`,
            course
        )
    } else {
        return axios.post(
            `${API_BASE_URL}/courses`,
            course
        )
    }
}

export const deleteCourse = (id) => {
    return axios.delete(
        `${API_BASE_URL}/courses/${id}`
    )
}