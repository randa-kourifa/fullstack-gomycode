import React from "react";
import Filter from "../components/Filter";
import MovieCard from "../components/MovieCard";
import MovieList from "../components/MovieList";
export default function Home() {
  return (
    <div>
      <MovieCard />
      <MovieList />
      <Filter />
    </div>
  );
}
