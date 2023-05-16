import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [errorMessage, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.py4e.com/api/film");
      if (!response.ok) {
        const error = new Error("something went wrong");
        throw error;
      }
      
      
      const data = await response.json();
      

      const movies = data.results.map((movie) => {
        return {
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setData(movies);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchData}>Fetch Movies</button>
      </section>
      <section>
        {isloading && data.length === 0 && <h1>Loading.....</h1>}
        {!isloading && data.length > 0 && <MoviesList movies={data} />}
        {!isloading && data.length == 0 && !errorMessage && <h1> No movies found</h1>}
        {!isloading && errorMessage != null && <h1>{errorMessage}</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;
