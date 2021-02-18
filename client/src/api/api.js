import axios from "axios";

const basePoint = "http://localhost:8000";

export const api = axios.create({ baseURL: basePoint });
