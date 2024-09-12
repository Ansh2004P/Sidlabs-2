import { Star } from "../utils/utils";
import propTypes from "prop-types";

const CustomCard = ({ name, rating, testimonial }) => {
  return (
    <div className="flex-shrink-0 w-[70%] lg:w-[24rem] flex flex-col items-center bg-neutral-200 gap-4 lg:py-6 lg:px-6 py-3 px-3 rounded-[0.4375rem] testimonial_card shadow-md shadow-black">
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between w-full">
          <p className="text-black text-[0.625rem] lg:text-[1.2rem] font-[600] capitalize">
            {name}
          </p>
          <span className="flex gap-3 items-center">
            <Star />
            <span className="text-[#0076B4]">{rating}</span>
          </span>
        </div>
        <div className="h-[0.125rem] w-full bg-neutral-600"></div>
        <p className="text-black text-[0.5rem] lg:text-[0.9rem] font-[300] capitalize">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  name: propTypes.string.isRequired,
  rating: propTypes.string.isRequired,
  testimonial: propTypes.string.isRequired,
};

export default CustomCard;
