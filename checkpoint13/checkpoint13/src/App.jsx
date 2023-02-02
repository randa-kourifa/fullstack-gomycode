import { Route, Routes } from "react-router-dom";
import "./App.css";
import Descriptionandtrailer from "./pages/descriptionandtrailer";
import Homes from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/descriptionandtrailer:id"
          element={<Descriptionandtrailer />}
        />
        <Route path="/Home:id" element={<Homes />} />
      </Routes>
    </div>
  );
}

export default App;
