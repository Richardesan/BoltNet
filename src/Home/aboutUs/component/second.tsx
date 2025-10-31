import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SecondPart = () => {
    const [viewportAmount, setViewportAmount] = useState(0.4);

  useEffect(() => {
    const handleResize = () => {
      // Match Tailwind's max-sm (640px)
      setViewportAmount(window.innerWidth <= 640 ? 0.1 : 0.4);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen max-sm:h-full flex flex-col justify-center px-12 max-lg:px-8 max-md:px-6 py-10 max-sm:py-0">
      <section className="flex justify-between gap-x-14 max-xl:flex-col max-xl:gap-10">
        {/* IMAGE SECTION */}
        <motion.article
          className="basis-[45%] max-xl:basis-full max-xl:hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.img
            src="/about2.jpg"
            alt="about2"
            className="w-full h-full rounded-4xl object-cover object-top shadow shadow-black/30 cursor-pointer max-md:h-80"
            whileHover={{
              scale: 1.05,
              rotate: -1.5,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          />
        </motion.article>

        {/* TEXT SECTION */}
        <motion.article
          className="basis-[45%] flex flex-col gap-y-3 py-3 max-xl:basis-full"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, amount: viewportAmount }}
        >
          <motion.p
            className="text-4xl font-medium max-md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Proven Success: The BoltNex BuyHub Ecosystem
          </motion.p>

          <motion.p
            className="text-base max-md:text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Our flagship internal product, BoltNex BuyHub, serves as a powerful
            proof-of-concept for our capabilities. BuyHub is an integrated
            e-commerce ecosystem that successfully addresses unique challenges
            in emerging markets by featuring:
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            className="flex items-center w-full justify-between gap-x-8 max-md:flex-col max-md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                title: "Localized Commerce",
                desc: "Features like the in-platform Negotiation Feature that align with local market culture.",
              },
              {
                title: "Localization Expertise",
                desc: "An AI Shopping Assistant for personalized, efficient, and localized user experiences.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="max-w-80 text-center flex flex-col justify-start max-md:max-w-full"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/circle.png"
                  alt="Circle"
                  className="w-14 mx-auto mb-2"
                />
                <p className="text-black text-xl font-medium max-md:text-lg">
                  {item.title}
                </p>
                <p className="mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Third Feature */}
          <motion.div
            className="max-w-80 mx-auto text-center  flex flex-col justify-start max-md:max-w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <img src="/circle.png" alt="Circle" className="w-14 mx-auto mb-2" />
            <p className="text-black text-xl font-medium max-md:text-lg">
              Scalable Architecture
            </p>
            <p className="mt-2">
              An Advanced Crowdsourced Delivery System designed for complex
              urban and regional logistics.
            </p>
          </motion.div>

          {/* Closing paragraph */}
          <motion.p
            className="text-start max-md:text-sm max-sm:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            viewport={{ once: true }}
          >
            The success of BuyHub validates our ability to execute complex,
            localized, and commercially viable technology projects for any
            external client.
          </motion.p>
        </motion.article>
      </section>
    </div>
  );
};

export default SecondPart;
