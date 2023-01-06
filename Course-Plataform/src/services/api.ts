import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const teste = getUserLocalStorage();

export const api = axios.create({
    baseURL: VITE_API_URL
});