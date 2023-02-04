import "./App.css";
import photo from "./assets/and.jpg";
import Data from "./Profile/components/Data";
import HandleName from "./Profile/components/HandleName";
import Images from "./Profile/components/Image";
function App() {
  return (
    <div className="App">
      <Data
        name="Elon Musk"
        biographie="i am the richest person in the us"
        job="DG"
      />
      <Images>
        <img src={photo} />
      </Images>
      <HandleName user="Elon Musk" />
    </div>
  );
}

export default App;
