import axios from "axios";
export default axios.create({
  baseURL: "http://spring-demo-jpa-dev.us-east-1.elasticbeanstalk.com/api",
  headers: {
    "Content-type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
});