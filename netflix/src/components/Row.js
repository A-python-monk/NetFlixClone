import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";

const imageurl = "https://image.tmdb.org/t/p/w1280//";

function Row({ title, fetchurl }) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchurl]);
  console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie, i) => (
          <img
            key={movie.id}
            className="row_poster"
            src={imageurl + movie.poster_path}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
export default Row;
