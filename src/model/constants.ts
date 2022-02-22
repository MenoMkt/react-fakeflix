const MOVIE_DB_API_KEY = "78a617d98a86512e085d7d26f3f8a68c";
export const MovieDbApi = {
  endpoint: {
    configuration: "/configuration",
    fetchTrending: `/trending/all/week?api_key=${MOVIE_DB_API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${MOVIE_DB_API_KEY}&with_networks=213`,
    fetchTopRated: `/discover/tv?api_key=${MOVIE_DB_API_KEY}&languager=en-us`,
    fetchActionMovies: `/discover/tv?api_key=${MOVIE_DB_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/tv?api_key=${MOVIE_DB_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${MOVIE_DB_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${MOVIE_DB_API_KEY}&with_genres=10749`,
    fetchDocumentMovies: `/discover/tv?api_key=${MOVIE_DB_API_KEY}&with_genres=99`,
    fetchMovieUrl: (id: string) =>
      `/movie/${id}/videos?api_key=${MOVIE_DB_API_KEY}`,
  },
};
