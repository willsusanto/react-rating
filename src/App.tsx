import { useState } from "react";
import Star from "./components/Star";

function App() {
  return (
    <div className="flex justify-center items-center h-lvh bg-gray-800">
      <div className="rounded-lg shadow-md p-6 bg-white">
        <h1 className="font-bold text-2xl text-center">Rating</h1>

        <form action="" className="mt-4">
          <div className="flex justify-center gap-3">
            {Array.from({ length: 5 }, (_, index: number) => (
              <Star key={index}></Star>
            ))}
          </div>

          <div className="w-full flex justify-center mt-10">
            <button type="submit" className="rounded-lg bg-blue-400 px-3 py-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
