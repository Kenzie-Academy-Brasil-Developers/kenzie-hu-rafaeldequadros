import axios from "axios";

const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    timeout: 5000,
    token: localStorage.getItem("Kenzie-Token"),
});

export default api;
