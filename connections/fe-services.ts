import axios from "axios";

const feServices = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default feServices;