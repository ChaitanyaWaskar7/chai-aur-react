import { useState } from "react";
function App() {
  const [colors, setColors] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200 bg-black"  style={{ backgroundColor: colors }}>
         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-xl px-2 text-white">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white text-black px-3 py-2 rounded-3xl"> 
          <button className="outline-none px-4 rounded-lg py-1" style={{backgroundColor:'red'}} onClick={() =>setColors('red')}>Red</button>
          <button className="outline-none px-4 rounded-lg py-1" style={{backgroundColor:'green'}} onClick={() =>setColors('green')}>green</button>
          <button className="outline-none px-4 rounded-lg py-1" style={{backgroundColor:'blue'}} onClick={() =>setColors('blue')}>blue</button>
          <button className="outline-none px-4 rounded-lg py-1" style={{backgroundColor:'yellow'}} onClick={() =>setColors('yellow')}>yellow</button>
          <button className="outline-none px-4 rounded-lg py-1" style={{backgroundColor:'purple'}} onClick={() =>setColors('purple')}>purple</button> 
          </div>
         </div>
      </div>
    </>
  );
}

export default App;
