import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  function handleIncrement() {
    setNumber(number + 1);
  }
  function handleDecrement() {
    setNumber(number - 1);
  }
  return (
    <div className="h-screen border-2 border-red-500 flex flex-row justify-center items-center">
      <div className="max-w-2xl w-96 mx-auto bg-orange-400 p-10 flex flex-row justify-between items-center rounded-xl">
        <div
          onClick={handleDecrement}
          className="px-5 py-3 text-white font-bold text-2xl bg-red-500 hover:bg-red-400 rounded-md"
        >
          <button>-</button>
        </div>
        <p className="text-3xl font-bold text-center text-white">{number}</p>
        <div
          onClick={handleIncrement}
          className="px-5 py-3 text-white font-bold text-2xl bg-green-500 hover:bg-green-400 rounded-md"
        >
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;
