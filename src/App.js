import Palette from "./Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div className="App">
      <Palette palette={seedColors[1]} />
    </div>
  );
}

export default App;
