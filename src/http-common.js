import axios from "axios";
export default axios.create({
  baseURL: "https://cors-everywhere-me.herokuapp.com/http://spring-demo-jpa-dev.us-east-1.elasticbeanstalk.com/api",
  headers: {
    "Content-type": "application/json"
  }
});