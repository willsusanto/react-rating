import { useState } from "react";
import Star from "./components/Star";

const TOTAL_STARS = 5;

function App() {
  const [ratingHoverValue, setHoverRatingValue] = useState<number | null>(null);
  const [ratingValue, setRatingValue] = useState<number | null>(null);

  const handleStarHover = (starValue: number | null): void => {
    setHoverRatingValue(starValue);
  };

  const handleStarClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    starValue: number
  ): void => {
    e.preventDefault();
    setRatingValue(starValue);
  };

  return (
    <div className="flex justify-center items-center h-lvh bg-gray-800">
      <div className="rounded-lg shadow-md p-6 bg-white py-12">
        <h1 className="font-bold text-2xl text-center">Rating</h1>

        <div className="flex justify-center gap-3 mt-4">
          {Array.from({ length: TOTAL_STARS }, (_, index: number) => {
            const isLargerThanRating: boolean =
              ratingHoverValue !== null
                ? ratingHoverValue >= index
                : ratingValue !== null && ratingValue >= index;
            return (
              <Star
                handleStarClick={handleStarClick}
                handleStarHover={handleStarHover}
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
