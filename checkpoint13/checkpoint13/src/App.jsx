import { Route, Routes } from "react-router-dom";
import "./App.css";
import Descriptionandtrailer from "./pages/descriptionandtrailer";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/descriptionandtrailer"
          element={<Descriptionandtrailer />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
