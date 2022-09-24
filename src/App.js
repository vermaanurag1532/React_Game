import { useState } from "react";
import Header from "./components/Header/Header";
import Start from "./components/Start.jsx/Start";
import Cards from "./components/Cards/Cards";
import "./App.css";

function App() {
  const [start, setStart] = useState(true);
  const setStartHandler = () => {
    setStart(false);
  };

  return (
    <>
      <Header />
      {start ? <Start onClick={setStartHandler} /> : <Cards />}
    </>
  );
}

export default App;
