import React, {useState}from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";


function App() {


  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://swapi.py4e.com/api/films")
      .then((response) => {  
        return response.json();
      })
      .then((data) => {
        const movies = data.results.map((movie) => {
          return {
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date,
          };
        });
        setData(movies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchData} >Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={data} />
      </section>
    </React.Fragment>
  );
}

export default App;
