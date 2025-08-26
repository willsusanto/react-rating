import React from "react";

interface StarProps {
  starValue: number;
  isSelected?: boolean;
  handleStarClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    starValue: number
  ) => void;
  handleStarHover: (starValue: number | null) => void;
}

const Star: React.FC<StarProps> = ({ starValue, isSelected, handleStarClick, handleStarHover }) => {
  return (
    <button
      className="cursor-pointer"
      onMouseEnter={() => handleStarHover(starValue)}
      onMouseLeave={() => handleStarHover(null)}
      onClick={(e) => handleStarClick(e, starValue)}
    >
      <svg
        className="h-12 mx-2"
        viewBox="0 -0.5 33 33"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>star</title>
        <defs></defs>
        <g
          id="Vivid.JS"
          stroke="#3153FF"
          strokeWidth="1"
          fillRule="evenodd"
        >
          <g
            id="Vivid-Icons"
            transform="translate(-903.000000, -411.000000)"
            fill={isSelected ? "#3153FF" : "#FFFFFF"}
          >
            <g id="Icons" transform="translate(37.000000, 169.000000)">
              <g id="star" transform="translate(858.000000, 234.000000)">
                <g transform="translate(7.000000, 8.000000)" id="Shape">
                  <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22"></polygon>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default Star;
