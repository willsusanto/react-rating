import Rating from "./components/Rating";

const TOTAL_STARS = 5;

function App() {
  return (
    <div className="flex justify-center items-center h-lvh bg-gray-800">
      <Rating stars={TOTAL_STARS}></Rating>
    </div>
  );
}

export default App;
