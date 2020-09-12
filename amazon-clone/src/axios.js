import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-react-f72ef.cloudfunctions.net/api" // The API (cloud function) URL
          // "http://localhost:5001/react-f72ef/us-central1/api"
});

export default instance;
