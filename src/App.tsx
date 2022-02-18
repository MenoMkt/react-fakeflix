import React, { useEffect } from "react";
import "./App.scss";
import { Row } from "./component/Row";
import { MovieDbApi } from "./model/constants";
import movieReq from "./model/movieDbRequest";

function App() {
  // useEffect(()=>{
  //   movieReq.get(MovieDbApi.endpoint.configuration)

  // },[])
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={MovieDbApi.endpoint.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={MovieDbApi.endpoint.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={MovieDbApi.endpoint.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={MovieDbApi.endpoint.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        fetchUrl={MovieDbApi.endpoint.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        fetchUrl={MovieDbApi.endpoint.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        fetchUrl={MovieDbApi.endpoint.fetchDocumentMovies}
      />
    </div>
  );
}

export default App;
