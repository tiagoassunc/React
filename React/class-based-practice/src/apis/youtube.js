import Axios from "axios";

const KEY = "AIzaSyAlobMSBdMBXBu7KwslU0PBColsiwQ8tuc";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
