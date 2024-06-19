import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const getCourses = () => {
    return axios.get(
        `${API_BASE_URL}/courses`
    )
}