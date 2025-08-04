import { useState } from "react";
import Star from "./components/Star";

function App() {
  const [ratingValue, setRatingValue] = useState<number>(-1);

  const handleStarClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    starValue: number
  ) => {
    e.preventDefault();
    setRatingValue(starValue);
  };

  return (
    <div className="flex justify-center items-center h-lvh bg-gray-800">
      <div className="rounded-lg shadow-md p-6 bg-white py-12">
        <h1 className="font-bold text-2xl text-center">Rating</h1>

        <div className="flex justify-center gap-3 mt-4">
          {Array.from({ length: 5 }, (_, index: number) => {
            const isLargerThanRating: boolean = ratingValue >= index;
            return (
              <Star
                handleStarClick={handleStarClick}
                isSelected={isLargerThanRating}
                key={index}
                starValue={index}
              ></Star>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
