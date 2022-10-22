import axios from "axios";

const baseURL = "http://127.0.0.1:8000";

interface IConnect {
  connect: () => void;
}

class ApiCallBegan implements IConnect {
  connect() {
    const instance = axios.create({
      baseURL: baseURL,
    });
    return instance;
  }
}

export default new ApiCallBegan();
