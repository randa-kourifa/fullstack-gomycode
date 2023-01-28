import "./App.css";
import Filter from "./components/Filter";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <MovieCard />
      <MovieList />
      <Filter />
    </div>
  );
}

export default App;
