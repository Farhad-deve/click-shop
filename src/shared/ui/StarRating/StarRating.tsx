import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export const StarRating = ({ rating, maxStars = 5 }: StarRatingProps) => {
  const filledCount = Math.round(rating);

  return (
    <>
      <div className="text-[14px] text-orange-500">
        <div className="flex space-x-1">
          {Array.from({ length: maxStars }).map((_, i) =>
            i < filledCount ? (
              <AiFillStar key={i} />
            ) : (
              <AiOutlineStar key={i} />
            ),
          )}
        </div>
      </div>
    </>
  );
};
