import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_APT_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_APT_URL,
});

//TODO: configurar interceptores

export default calendarApi;
