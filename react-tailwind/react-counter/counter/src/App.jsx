import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1); 

    setCounter(prevCounter=> prevCounter +1) // can also write counter instead of prevCounter
    setCounter(prevCounter=> prevCounter +1)
    setCounter(prevCounter=> prevCounter +1)
    setCounter(prevCounter=> prevCounter +1)
  };

  const removeValue = () => {
    setCounter(counter-1);
  };

  return (
    <>
      <h1>Chai aur react</h1>

      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>

      <br /> 
      <br />

      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;