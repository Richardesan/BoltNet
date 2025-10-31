import { motion } from "framer-motion";

const FlagShipProject = () => {
  return (
    <section className="pt-16 flex items-center justify-between gap-x-14 max-xl:flex-col max-xl:gap-12 max-md:gap-8">
      {/* LEFT IMAGE SECTION */}
      <motion.article
        className="basis-[45%] max-xl:basis-full max-sm:hidden max-xl:order-1"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.img
          src="/service.jpg"
          alt="service"
          className="w-full rounded-4xl object-cover object-top shadow shadow-black/30 h-120 cursor-pointer max-md:h-80"
          whileHover={{
            scale: 1.05,
            rotate: 1.5,
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          whileTap={{ scale: 0.98 }}
        />
      </motion.article>

      {/* RIGHT TEXT SECTION */}
      <motion.article
        className="basis-[45%] max-xl:basis-full max-xl:text-center max-md:text-left"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p
          className="text-lg font-medium text-bolts-blue mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Services
        </motion.p>

        <motion.p
          className="font-bold text-4xl w-9/12 text-black max-xl:w-full max-md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Our Expertise: Building the Foundations of Digital Success
        </motion.p>

        <motion.p
          className="w-9/12 my-6 max-xl:w-full max-md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          We offer a focused suite of high-value services to help you launch,
          scale, and optimize your digital presence.
        </motion.p>

        {/* SERVICES GRID */}
        <motion.div
          className="grid grid-cols-2 gap-y-6 max-md:grid-cols-1 max-md:gap-y-8 max-xl:place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
           
            {
              img: "/cup.svg",
              title: "AI/ML and Data Solutions:",
              desc: "Intelligent features for personalization and automation.",
            },
           
            {
              img: "/stand.svg",
              title: "Market Localization & Integration:",
              desc: 'Solving the "last mile" of digital complexity in international markets.',
            },
             {
              img: "/truck.svg",
              title: "Custom Platform Engineering:",
              desc: 'Solving the "last mile" of digital complexity in international markets.',
            },
            {
              img: "/pig.svg",
              title: "Technology Consulting:",
              desc: "Strategic advisory to align your tech roadmap with business goals.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="max-w-80 text-start flex flex-col justify-start max-md:max-w-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <img src={item.img} alt={item.title} className="w-14 mb-2" />
              <p className="text-black text-xl font-semibold">{item.title}</p>
              <p className="mt-4">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.article>
    </section>
  );
};

export default FlagShipProject;
