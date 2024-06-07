import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <>
      <Lottery n={4} winningSum={10} />
    </>
  );
}

export default App;
