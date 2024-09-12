import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/imgs/Hero.jpg";

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      ref={heroRef}
      className="h-screen text-white flex flex-col justify-center relative"
      animate={{ opacity: isInView ? 1 : 0.5 }} // Adjust opacity when in/out of view
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 h-screen w-full object-cover -z-20"
        src={img1}
        alt="Hero background"
      />

      {/* Overlay */}
      <div className="absolute h-screen w-screen -z-10 bg-gradient-to-b from-transparent to-gray-900 opacity-95" />

      {/* Text and Button */}
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-montserrat">
          Your Journey, Always Connected
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 font-lato">
          Linking Travelers with Loved Ones for a Safe and Shared Journey
        </p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
