import { API_BASE_URL } from "env";
import axios from "axios";

export const getStudents = () => {
    return axios.get(
        `${API_BASE_URL}/students`
    )
}