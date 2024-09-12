import { FaArrowRight } from "react-icons/fa";
import propTypes from "prop-types";
// import { truncateDescription } from "../utils/utils.jsx";

const Card = ({ img, cardDescription, cardHeading }) => {
  // const truncatedDescription = truncateDescription(cardDescription, 25);

  return (
    <main className="flex flex-col items-center justify-center p-12 font-roboto h-fit">
      <div className="relative w-[24rem] h-[28rem] rounded-lg overflow-hidden cursor-pointer shadow-black text-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        <img
          src={img}
          alt=""
          className="absolute inset-0 object-cover w-full h-full opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black  flex flex-col justify-end p-8">
          <div className="relative z-10">
            <p className="font-lora opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              {cardDescription}
            </p>
            <div className="opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
              <button className="mt-4 text-blue-600 flex items-center space-x-2">
                <span>Find out more</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
          <h2 className="absolute inset-0 flex items-center justify-center uppercase transition-transform duration-300 ease-out group-hover:translate-y-[-200px] font-abril text-[1.4rem]">
            {cardHeading}
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Card;

Card.propTypes = {
  img: propTypes.string,
  cardDescription: propTypes.string,
  cardHeading: propTypes.string,
};
