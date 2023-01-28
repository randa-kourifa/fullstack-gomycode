//Filter.js
import React, { useState } from "react";

const Filter = ({ handleFilter, handleAddMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by minimum rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={() => handleFilter(title, rating)}>Filter</button>
      <br />
      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <input type="text" />
    </div>
  );
};
