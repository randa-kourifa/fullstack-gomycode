import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      title: "Movie 1",
      description: "Description 1",
      posterURL: "url1",
      rating: 4,
    },
    {
      title: "Movie 2",
      description: "Description 2",
      posterURL: "url2",
      rating: 5,
    },
    {
      title: "Movie 3",
      description: "Description 3",
      posterURL: "url3",
      rating: 3,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...filteredMovies, movie]);
  };

  const handleFilter = (title, rating) => {
    setFilteredMovies(
      movies.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          movie.rating >= rating
        );
      })
    );
  };

  return (
    <div>
      <Filter handleFilter={handleFilter} handleAddMovie={handleAddMovie} />
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.title} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
