import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const obj = {
    buttonName1 : 'firstbutton',
    buttonName2 : 'secondbutton'
  }
  return (
    <>
      <h1 className="text-red-300 text-black bg-slate-500 rounded">
        Tailwind css test{" "}
      </h1>
      <br />
      <Card buttonName = "this is button-1"/>
      <Card buttonName = "this is button-2"/>

    </>
  );
}

export default App;
