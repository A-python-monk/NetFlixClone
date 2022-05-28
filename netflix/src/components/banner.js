import { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./banner.css";

export default function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
  }

  //  console.log(Math.floor(Math.random() * res.data.results.length));
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadebuttom" />
    </header>
  );
}
