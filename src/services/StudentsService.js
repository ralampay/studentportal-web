import { API_BASE_URL } from "env";
import axios from "axios";

export const getStudents = () => {
    return axios.get(
        `${API_BASE_URL}/students`
    )
}

export const saveStudent = (student) => {
    if (student.id) {
        return axios.put(
            `${API_BASE_URL}/students/${student.id}`,
            student
        )
    } else {
        return axios.post(
            `${API_BASE_URL}/students`,
            student
        )
    }
}

export const deleteStudent = (id) => {
    return axios.delete(
        `${API_BASE_URL}/students/${id}`
    )
}

export const getStudent = (id) => {
    return axios.get(
        `${API_BASE_URL}/students/${id}`
    )
}