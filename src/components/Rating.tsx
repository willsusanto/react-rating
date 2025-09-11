import { useState } from "react";
import Star from "./Star";

const DEFAULT_FEEDBACK_MESSAGE: string[] = [
  "Terrible",
  "Poor",
  "Fair",
  "Good",
  "Excellent",
];

interface RatingProps {
  feedbackMsg?: string[];
  heading?: string;
  stars: number;
}

const Rating = ({ feedbackMsg = DEFAULT_FEEDBACK_MESSAGE, heading = "Rate this app", stars }: RatingProps) => {
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

  const getFeedbackMessage = (): string => {
    if (ratingHoverValue !== null) return feedbackMsg[ratingHoverValue];
    if (ratingValue !== null) return feedbackMsg[ratingValue];
    return '\u00A0'; // Non-breaking space
  };

  return (
    <div className="rounded-lg shadow-md p-6 bg-white py-12 block">
      <h1 className="font-bold text-2xl text-center">{heading}</h1>

      <div className="flex justify-center gap-3 mt-4 flex-col items-center">
        <div>
          {Array.from({ length: stars }, (_, index: number) => {
            const isLargerThanRating: boolean =
              ratingHoverValue !== null
                ? ratingHoverValue >= index
                : ratingValue !== null && ratingValue >= index;
            return (
              <Star
                handleStarClick={handleStarClick}
                handleStarHover={handleStarHover}
                isSelected={isLargerThanRating}
                starColor="#FFFF00"
                key={index}
                starValue={index}
              ></Star>
            );
          })}
        </div>

        <p>
          <b>{getFeedbackMessage()}</b>
        </p>
      </div>
    </div>
  );
};

export default Rating;
