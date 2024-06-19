import axios from "axios";
import { API_BASE_URL } from "../helpers/defaults";

export const getStudents = () => {
    return axios.get(
        `${API_BASE_URL}/students`
    )
}