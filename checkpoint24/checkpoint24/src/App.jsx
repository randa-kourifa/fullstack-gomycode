import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact page/Contactpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Contact />
    </div>
  );
}

export default App;
