import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import ReadMore from "./readMore";

interface Card {
  id: number;
  startcount?: number;
  text: string;
  title?: string;
  dp?: string;
  bg?: string;
  role?: string;
}

const Testimony: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const cards: Card[] = [
    {
      id: 1,
      dp: "/cloud.svg",
      title: "Custom Platform Engineering",
      text: `End-to-end development of complex, scalable 
       software platforms (web and mobile) built on modern 
       microservices and cloud-native architectures.`,
    },
    {
      id: 2,
      dp: "/three-stars.svg",
      title: "AI/ML and Data Solutions",
      text: `Integration of advanced Artificial Intelligence  
      and Machine Learning models for personalization, 
      automation, predictive analytics, and specialized features.`,
    },
    {
      id: 3,
      dp: "/castle.svg",
      title: "Market Localization & Integration",
      text: `Expertise in adapting global platforms for local 
       markets, including custom payment gateway integration, 
       logistics system design, and localized feature development.`,
    },
    {
      id: 4,
      dp: "/technology.svg",
      title: "Technology Consulting & Audits",
      text: `Strategic advisory on technology roadmap,  
      architecture design, digital transformation strategy, 
      and security audits for existing systems.`,
    },
    {
      id: 5,
      dp: "/castle.svg",
      title: "Market Localization & Integration",
      text: `Expertise in adapting global platforms for local 
       markets, including custom payment gateway integration, 
       logistics system design, and localized feature development.`,
    },
  ];

  const totalCards = cards.length;

  const handleNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setTimeout(() => setIsAnimating(false), 600); // match transition duration
  };

  const handleBack = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getCardPosition = (cardIndex: number) => {
    let position = cardIndex - currentIndex;
    if (position < 0) position += totalCards;
    if (position >= totalCards) position -= totalCards;
    return position;
  };

  return (
    <div className="flex items-center flex-col justify-center relative text-black overflow-hidden py-10">
      <div className="relative w-full h-[470px] max-sm:h-[400px] flex items-start justify-start pl-8">
        {cards.map((card, cardIndex) => {
          const position = getCardPosition(cardIndex);
          if (position > 4) return null;

          const isActive = position === 0;
          const xPosition = position * 400;
          const scale = isActive ? 1.1 : 0.95;
          // Reduce overall opacity when animation is active
          const opacity = isAnimating
            ? isActive
              ? 0.8
              : 0.4
            : isActive
            ? 1
            : 0.6;

          const zIndex = isActive ? 20 : 10 - position;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                x: xPosition,
                scale,
                opacity,
                zIndex,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="absolute h-[400px] max-sm:h-[350px] w-[364px] max-md:w-[320px] max-sm:w-[280px] max-sm:p-4 px-8 py-7 rounded-xl shadow-black/30 bg-white shadow-sm"
              style={{
                cursor: isActive ? "default" : "pointer",
              }}
              onClick={() => {
                if (!isActive) setCurrentIndex(cardIndex);
              }}
            >
              <div className="flex flex-col justify-start items-start relative h-full gap-y-5">
                <div>
                  <img src={card.dp} alt="icon" className="w-14 h-14 mb-2" />
                  <p className="font-semibold text-lg">{card.title}</p>
                </div>
                <div className="text-base max-sm:text-sm">
                  <ReadMore text={card.text} maxChars={200} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex w-full justify-start gap-4 z-10 pl-8">
        <button
          onClick={handleBack}
          disabled={isAnimating}
          className={`border border-[#FCD34D] cursor-pointer text-[#FCD34D] flex justify-center items-center w-12 h-12 rounded-full transition-all duration-150 hover:scale-110 active:scale-95 ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous testimonial"
        >
          <FaArrowLeft className="max-sm:text-xs" />
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          className={`border border-[#FCD34D] cursor-pointer text-[#FCD34D] rotate-180 flex justify-center items-center w-12 h-12 rounded-full transition-all duration-150 hover:scale-110 active:scale-95 ${
            isAnimating ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Next testimonial"
        >
          <FaArrowLeft className="max-sm:text-xs" />
        </button>
      </div>
    </div>
  );
};

export default Testimony;
