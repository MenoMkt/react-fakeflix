import "./Row.scss";
import { useEffect, useState } from "react";

import dbReq from "../model/movieDbRequest";

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
const base_url = `https://image.tmdb.org/t/p/w500`;
export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

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
          />
        ))}
      </div>
    </div>
  );
};
