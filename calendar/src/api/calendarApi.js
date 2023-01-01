import axios from "axios";
import { getEnv } from "../helpers/getEnv";
const { VITE_APT_URL } = getEnv();

const calendarApi = axios.create({
  baseURL: VITE_APT_URL,
});

//TODO: configure axios interceptors

export default calendarApi;
