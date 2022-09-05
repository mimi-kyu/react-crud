import axios from "axios";
export default axios.create({
  baseURL: "https://d4xw46zvf5.execute-api.us-east-1.amazonaws.com/api",
  headers: {
    "Content-type": "application/json"
  }
});