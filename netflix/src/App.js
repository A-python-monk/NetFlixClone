import "./App.css";
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/banner";
import Nav from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchurl={requests.fetchNetflixOriginals}
        islargerow
      />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumantaries} />
      <Row title="Romance" fetchurl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
