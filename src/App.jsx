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
      <div className="max-w-2xl w-80 mx-auto bg-[#282828] p-10  rounded-xl">
        <h4 className="text-md font-bold text-white text-center mb-4">
          ON / OFF / RESET
        </h4>
        <h2 className="text-center text-white font-bold text-xl mb-5">
          TALLY COUNTER
        </h2>
        <p className="text-5xl font-bold text-center bg-[#7D8386] py-8 rounded-lg  text-[#000404]">
          {number}
        </p>
        <h5 className="text-md font-bold text-white text-center my-5">COUNT</h5>
        <div className="w-60 h-32 rounded-full overflow-hidden flex flex-row-reverse">
          {/* + */}
          <button
            onClick={handleIncrement}
            className="cursor-pointer px-5 py-3 text-white font-bold text-2xl bg-green-500 hover:bg-green-400  w-full overflow-hidden"
          >
            +
          </button>
          {/* - */}
          <button
            onClick={handleDecrement}
            className="cursor-pointer px-5 py-3 text-white font-bold text-2xl bg-red-500 hover:bg-red-400  w-full"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
