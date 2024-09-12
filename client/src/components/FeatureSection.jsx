/* eslint-disable react/no-unescaped-entities */
import img1 from "../assets/imgs/VidCall.jpg";
import Card from "./Card";
import img2 from "../assets/imgs/Location.jpg";
import img3 from "../assets/imgs/Emergency.jpg";
import img4 from "../assets/imgs/Messaging.jpg";
import img5 from "../assets/imgs/TripStatus.jpg";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-slate-200">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-header">
              Never lose touch with your loved ones
            </h2>
            <p className="text-lg mb-6 font-roboto">
              Whether you’re embarking on a solo adventure or exploring with a
              group, TraveLink is the ideal platform to connect with fellow
              travelers. Browse diverse profiles, chat and faceTime with
              potential buddies, and plan your next adventure together. From
              enjoying local hotspots to discovering hidden gems, the
              possibilities are endless.
              <br />
              <br />
              In our Common Room, anything goes! Seek recommendations for the
              best sights, top bars, or even organize meet-ups with fellow
              travelers. Use the 'Nearby' tab to see what’s happening around you
              or the 'Worldwide' tab to get insights from global explorers.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <i className="icon-chat text-2xl"></i>
                <div>
                  <h5 className="font-bold text-xl font-lato">
                    A Vibrant TraveList Community
                  </h5>
                  <p className="font-roboto">
                    Skip the biased online reviews and get authentic advice from
                    travelers who are on the ground. Our community provides
                    real-time tips and recommendations to enhance your journey.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <i className="icon-note2 text-2xl"></i>
                <div>
                  <h5 className="font-bold text-xl font-lato">
                    Explore and Connect in the Common Room
                  </h5>
                  <p className="font-roboto">
                    Discover posts by location or search for specific keywords
                    and hashtags that align with your travel plans. The Common
                    Room is your hub for connecting with like-minded explorers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="md:w-1/2 flex justify-center hidden md:flex" // Hide on small screens, show on md and above
          >
            <img
              src={img1}
              className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg" // Resize on small screens
              alt="Travel Call"
            />
          </div>
        </div>
      </div>
      <header className=" mt-12 font-semibold flex items-center flex-col gap-3 w-full">
        <div className="flex flex-col items-center w-full px-4">
          <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mb-4"></div>
          <h1 className="text-[#0076B4] text-[1.125rem] sm:text-[1.375rem] md:text-[2rem] lg:text-[2.4375rem] font-bold text-center">
            Glimpse of our Features
          </h1>
          <div className="w-full max-w-3xl h-[0.125rem] bg-sky-700 mt-4"></div>
        </div>
      </header>
      <div className="container w-full py-2 my-8 h-fit flex overflow-auto">
        <Card
          cardHeading={"Real-Time Location Sharing"}
          img={img2}
          cardDescription={
            "Effortlessly share your current location with loved ones as you travel. Our real-time location sharing feature ensures that your friends and family can monitor your journey live, providing peace of mind with every step you take. Whether you’re on a road trip, exploring a new city, or just navigating through your daily routine, your Watchers stay updated with precise location updates, route history, and estimated arrival times. Enjoy the freedom to explore, knowing that your connections are just a tap away."
          }
        />
        <Card
          cardDescription={
            "In critical situations, every second counts. Our Emergency Alerts feature allows Seekers to quickly send distress signals to their Watchers with just a tap. This alert includes your current location and a pre-set message, ensuring your loved ones are immediately notified in case of emergencies. The system also sends real-time updates to keep Watchers informed, providing a crucial safety net and peace of mind during your travels."
          }
          cardHeading={"Emergency Alerts"}
          img={img3}
        />
        <Card
          cardDescription={
            "Our In-App Messaging feature keeps you in touch with your loved ones while you travel. Seamlessly exchange messages with Watchers directly within the app, making it easy to share updates, check-ins, or just stay in touch. Whether you need to quickly inform someone of a change in plans or simply share a moment from your journey, our messaging system ensures you’re always connected, no matter where your travels take you."
          }
          cardHeading={"In-App Messaging"}
          img={img4}
        />
        <Card
          cardDescription={
            "Stay on top of your journey with real-time Trip Status Updates. Our feature allows Seekers to easily share their travel progress, including arrival times, current locations, and notable checkpoints, with their Watchers. Whether you’re en route or have arrived at your destination, keep your Watchers informed with automatic updates or manual check-ins, ensuring they’re always aware of your whereabouts and travel progress."
          }
          cardHeading={"Trip Status Updates"}
          img={img5}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
