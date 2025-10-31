import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-12 max-lg:px-8 max-md:px-6 py-10">
      <div className="flex justify-between items-center max-xl:flex-col max-xl:gap-10">
        {/* LEFT SECTION */}
        <article className="basis-1/2 max-xl:basis-full max-xl:text-center">
          <div className="max-w-2xl max-xl:w-full w-full flex flex-col justify-between h-full">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl max-xl:text-5xl max-md:text-3xl font-semibold"
            >
              Engineering Scalable Digital Solutions for the Next Global Economy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="mt-2 text-[#00000099] py-6 font-medium"
            >
              From our UK base, we build highly localized, AI-driven software
              platforms that bridge the digital divide in high-growth
              international markets.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-bolts-blue w-fit max-md:text-sm max-xl:mx-auto cursor-pointer text-white py-4 px-6 rounded-lg font-bold"
            >
              Explore Our Solutions
            </motion.button>
          </div>
        </article>

        {/* RIGHT SECTION */}
         <motion.section
          className="basis-[50%] max-xl:hidden flex flex-col gap-4 max-xl:flex-row max-md:flex-col max-xl:justify-center max-xl:items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          {/* On tablet/phone, stack or center the image grid */}
          <article className="flex items-start justify-start gap-3 max-xl:flex-col max-md:w-full">
            <motion.div
              className="w-full h-52 overflow-hidden shadow shadow-black/30 rounded-full max-md:h-44"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, ease: 'easeInOut' }}
            >
              <img
                src="/heroImg1.png"
                alt="heroImg1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="w-72 h-52 border overflow-hidden shadow shadow-black/30 rounded-full max-md:w-full max-md:h-44"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            >
              <img
                src="/img2.jpg"
                alt="heroImg2"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </article>

          <article className="flex items-start justify-start gap-3 max-xl:flex-col max-md:w-full">
            <motion.div
              className="w-72 h-52 border overflow-hidden shadow shadow-black/30 rounded-full max-md:w-full max-md:h-44"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, ease: 'easeInOut' }}
            >
              <img
                src="/img4.jpg"
                alt="heroImg3"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="w-full h-52 border overflow-hidden shadow shadow-black/30 rounded-full max-md:h-44"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 7, ease: 'easeInOut' }}
            >
              <img
                src="/img3.jpg"
                alt="heroImg4"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </article>
        </motion.section>
      </div>
    </section>
  );
};

export default Hero;
