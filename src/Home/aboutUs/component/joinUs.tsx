import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <div className="flex flex-col h-screen justify-center overflow-hidden max-lg:h-auto max-lg:py-20">
      <div className="flex justify-between items-center max-xl:flex-col max-xl:gap-12">
        {/* LEFT IMAGE SECTION */}
        <motion.article
          className="basis-1/2 max-xl:basis-full max-xl:order-1 max-xl:hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="w-fit mx-auto max-xl:w-full">
            <motion.img
              src="/join.png"
              alt="join"
              className="w-full h-auto object-cover cursor-pointer rounded-2xl"
              whileTap={{ scale: 0.98 }}
            />
          </div>
        </motion.article>

        {/* RIGHT TEXT SECTION */}
        <motion.article
          className="basis-[45%] max-xl:basis-full text-lg flex flex-col items-start gap-y-8 py-3 max-xl:items-center max-xl:text-center max-sm:items-start max-sm:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h1
            className="font-bold text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Why join us
          </motion.h1>

          {/* Features list with stagger */}
          <motion.article
            className="flex flex-col gap-y-8 max-md:gap-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
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
                title: "UK Credibility:",
                desc: "Our UK registration provides legal stability, strong intellectual property protection, and a global reputation for high-quality technology services.",
              },
              {
                title: "Localization Expertise:",
                desc: "We don't just build software; we build market-ready solutions that solve the 'last mile' of digital complexity in international markets.",
              },
              {
                title: "Scalable Architecture:",
                desc: "We build platforms that are future-proof, capable of handling massive transaction volumes and supporting exponential growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-x-3 "
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/green-check.svg"
                  alt="check"
                  className="w-6 h-6 max-md:mb-2"
                />
                <p className="max-w-xl leading-relaxed">
                  <span className="font-bold mr-2">{item.title}</span>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.article>

          {/* Button with hover effect */}
          <motion.button
            className="text-bolts-blue cursor-pointer text-base font-semibold border border-bolts-blue rounded-md px-8 py-2.5 mt-4 max-md:text-sm max-md:px-6"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#0070f3",
              color: "#fff",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            Join Us Now
          </motion.button>
        </motion.article>
      </div>
    </div>
  );
};

export default JoinUs;
