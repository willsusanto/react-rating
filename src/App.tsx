import Rating from "./components/Rating";

const TOTAL_STARS = 5;

function App() {
  return (
    <div className="flex justify-center items-center h-lvh bg-gray-800 flex-col gap-6">
      <Rating stars={TOTAL_STARS} feedbackMsg={['0', '1', '2', '3', '4']}></Rating>
      <Rating heading="Rate the service" stars={TOTAL_STARS}></Rating>
    </div>
  );
}

export default App;
