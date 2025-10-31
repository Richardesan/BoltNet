import { motion } from "framer-motion";

const FirstPart = () => {
  return (
    <div className="h-screen max-sm:h-full flex flex-col justify-center px-12 max-lg:px-8 max-md:px-6 py-10 max-sm:pt-10">
      <section className="flex flex-row-reverse items-start justify-between gap-x-14 max-xl:flex-col max-xl:gap-10">
        {/* IMAGE SECTION */}
        <motion.article
          className="basis-[45%] max-xl:basis-full max-xl:hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src="/about.jpg"
            alt="about"
            className="w-full rounded-4xl object-cover object-top shadow shadow-black/30 h-110 cursor-pointer max-md:h-80"
            whileHover={{
              scale: 1.05,
              rotate: 1.5,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          />
        </motion.article>

        {/* TEXT SECTION */}
        <motion.article
          className="basis-[45%] max-xl:basis-full"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <motion.p
            className="font-bold text-4xl w-9/12 text-black max-xl:w-full max-md:text-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Engineering the Future of Global Digitalization.
          </motion.p>

          <motion.div
            className="flex-col flex gap-y-3 my-6 text-base max-md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p>
              BoltNex Technology is a UK-registered, full-service technology and
              innovation firm dedicated to building the next generation of
              highly scalable, localized, and AI-driven software platforms.
            </p>
            <p>
              From our strategic base in the United Kingdom, we leverage
              world-class engineering standards to tackle the most complex
              digital challenges in high-growth markets worldwide.
            </p>
            <p>
              Our mission is clear: To empower global businesses and drive
              economic inclusion in emerging markets by delivering innovative,
              localized, and highly scalable technology solutions.
            </p>
            <div>
              <p className="font-medium text-3xl w-9/12 mb-3 text-black max-xl:w-full max-md:text-xl">
                Our Core Philosophy: Localization Meets World-Class Engineering
              </p>
              <p>
                We believe true digital transformation requires solutions that
                are not only robust and scalable but also intimately tailored to
                the logistical, cultural, and market-specific realities of local
                environments. We combine the technical excellence and legal
                stability of a UK-based firm with a deep, on-the-ground
                understanding of international markets.
              </p>
            </div>
          </motion.div>
        </motion.article>
      </section>
    </div>
  );
};

export default FirstPart;
