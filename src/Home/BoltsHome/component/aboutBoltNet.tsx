import { motion, useAnimation, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutBoltNet = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Detect screen width (Tailwind's `max-xl` breakpoint = 1280px)
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth <= 1280;

  useEffect(() => {
    if (isSmallScreen && isInView) {
      controls.start("visible");
    } else if (!isSmallScreen) {
      // Instantly show everything on desktop
      controls.set("visible");
    }
  }, [isInView, controls, isSmallScreen]);

  // Container controls stagger timing for children
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // delay between each card
        delayChildren: 0.15, // delay before first card starts
      },
    },
  };

  // Individual card animations
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="flex justify-between items-center gap-10 px-12 py-20 max-lg:px-8 max-md:px-6 max-xl:flex-col max-xl:gap-16">
      {/* LEFT SECTION */}
      <article className="basis-1/2 max-xl:basis-full text-left max-xl:text-center flex flex-col items-start max-xl:items-center">
        <div className="max-w-xl w-full">
          <p className="text-4xl max-md:text-3xl font-semibold leading-snug">
            Localization Meets World-Class Engineering
          </p>

          <p className="my-8 text-lg max-md:text-base font-medium text-[#00000099]">
            We combine the technical excellence and legal stability of a
            UK-registered firm with a deep, on-the-ground understanding of
            international markets. We don't just build software; we build
            market-ready solutions.
          </p>

          {/* STATIC IMAGE (no animation at all) */}
          <img
            src="/wordClass.jpg"
            alt="wordClass"
            className="w-9/12 max-xl:w-full h-100 max-md:h-auto rounded-3xl object-cover object-top shadow shadow-black/30 mx-auto"
          />
        </div>
      </article>

      {/* RIGHT SECTION (Animated only on smaller screens) */}
      <motion.article
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="basis-[45%] max-xl:basis-full flex flex-col items-center gap-y-8 py-3"
      >
        <motion.div
          variants={containerVariants}
          className="flex items-start justify-center gap-x-10 max-md:flex-col max-md:gap-y-10"
        >
          {/* CARD 1 */}
          <motion.div
            variants={cardVariants}
            className="max-w-80 text-center flex flex-col justify-start items-center"
          >
            <img
              src="/ukcredibility.svg"
              alt="ukcredibility"
              className="w-14 mx-auto mb-4"
            />
            <p className="text-black text-2xl max-md:text-xl font-semibold">
              UK Credibility
            </p>
            <p className="mt-4 text-[#00000099] max-md:text-base">
              Deep commitment to adapting technology for the cultural,
              logistical, and payment realities of local markets.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardVariants}
            className="max-w-80 text-center flex flex-col justify-start items-center"
          >
            <img
              src="/location.svg"
              alt="location"
              className="w-14 mx-auto mb-4"
            />
            <p className="text-black text-2xl max-md:text-xl font-semibold">
              Localization Expertise
            </p>
            <p className="mt-4 text-[#00000099] max-md:text-base">
              Future-proof platforms built on microservices and cloud-native
              principles, designed to handle massive transaction volumes and
              exponential growth.
            </p>
          </motion.div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          variants={cardVariants}
          className="max-w-80 text-center flex flex-col justify-start items-center"
        >
          <img
            src="/architecture.svg"
            alt="architecture"
            className="w-14 mx-auto mb-4"
          />
          <p className="text-black text-2xl max-md:text-xl font-semibold">
            Scalable Architecture
          </p>
          <p className="mt-4 text-[#00000099] max-md:text-base">
            Leverage our UK base for legal stability, strong IP protection, and
            a reputation for high-quality, reliable technology services.
          </p>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default AboutBoltNet;
