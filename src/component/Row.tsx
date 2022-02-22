import "./Row.scss";
import { useEffect, useState } from "react";

import dbReq from "../model/movieDbRequest";
import { MovieDbApi } from "../model/constants";
import YouTube from "react-youtube";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};
type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

const base_url = `https://image.tmdb.org/t/p/w500`;
export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    async function fetchData() {
      const request = await dbReq.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // 第2引数に副作用に依存する変数の配列を渡す =>その変数が変更されたときのみ、副作用が実行される
  }, [fetchUrl]);
  console.log(title);
  //   console.log(movies);

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerUrl = await dbReq.get(
        MovieDbApi.endpoint.fetchMovieUrl(movie.id)
      );
      setTrailerUrl(trailerUrl.data.results[0]?.key);
    }
  };

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : ""}
    </div>
  );
};
