import axios from "axios";

const api = axios.create({
    baseURL:"https://movienew.cybersoft.edu.vn/api",
});

api.interceptors.request.use((config: any)=>{
    config.headers = {
        ...config.headers,
        TokenCybersoft:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBKYXZhIDA4IiwiSGV0SGFuU3RyaW5nIjoiMDMvMTAvMjAyNSIsIkhldEhhblRpbWUiOiIxNzU5NDQ5NjAwMDAwIiwibmJmIjoxNzI3NTY4MDAwLCJleHAiOjE3NTk2MjI0MDB9.t88DovcZaR6NTahJxIxAnHVcOKspKdRXEdyzsJHCgDA'
    };
    return config;
});

export default api;