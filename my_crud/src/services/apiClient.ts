//นำเข้าไลบรารี axios ซึ่งเป็นเครื่องมือสำหรับส่ง HTTP requests (เช่น GET, POST, PUT, DELETE) ไปยัง API ต่าง ๆ โดยใช้ Promise-based 
import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
const API_TOKEN = import.meta.env.VITE_API_BASE_URL as string;

const apiClient = axios.create()