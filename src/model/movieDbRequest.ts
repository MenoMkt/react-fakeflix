import axios from "axios";

const movieDbRequest = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default movieDbRequest;
