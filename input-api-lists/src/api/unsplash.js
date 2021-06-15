import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID jplWrctjjR-mQ8fcQN4BFhJMG9kwV8bceyS0XE9uqPY",
  },
});
