import { useRef, useState } from "react";
import FeaturesSection from "./components/FeatureSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ReviewSection from "./components/ReviewSection";
import Scrollbars from "react-custom-scrollbars";

function App() {
  const [scrollPosition, setScrollPosition] = useState({ y: 0 });
  const scrollbarsRef = useRef(null);

  const handleScroll = () => {
    const scrollbars = scrollbarsRef.current;
    setScrollPosition({
      y: scrollbars.getScrollTop(), // Update scroll position
    });
  };

  return (
    <div className="w-full h-full fixed overflow-x-hidden bg-neutral-900 overflow-y-auto">
      <Scrollbars
        autoHide
        className="flex-grow"
        onScroll={handleScroll}
        ref={scrollbarsRef}
      >
        <Header isHeroInView={scrollPosition.y > window.innerHeight * 0.85} />
        <HeroSection />
        {/* <ScrollingText /> */}
        <FeaturesSection />
        <ReviewSection />
        {/* <Card /> */}
        {/* <ExploreSection /> */}
        <Footer />{" "}
      </Scrollbars>
    </div>
  );
}

export default App;
