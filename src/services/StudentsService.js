import { API_BASE_URL } from "env";
import axios from "axios";

export const getStudents = () => {
    return axios.get(
        `${API_BASE_URL}/students`
    )
}

export const saveStudent = (student) => {
    return axios.post(
        `${API_BASE_URL}/students`,
        student
    )
}

export const deleteStudent = (id) => {
    return axios.delete(
        `${API_BASE_URL}/students/${id}`
    )
}