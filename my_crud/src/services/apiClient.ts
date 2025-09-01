import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // ดึงจาก .env
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor ใส่ Authorization header อัตโนมัติ
apiClient.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_API_TOKEN; // ดึง token จาก .env.local
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient