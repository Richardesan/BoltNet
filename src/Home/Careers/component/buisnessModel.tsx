import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const BuisnessModel = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="px-24 max-xl:px-10 max-md:px-5 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
       <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl text-center mt-20 font-semibold">
  What Benefit Will You Get
</h1>

      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          mt-8 
          auto-rows-[1fr]
          place-items-stretch
        "
      >
        {[
          {
            icon: "/flash.svg",
            title: "Fast growing company",
            text: "We are at an inflection point to achieve accelerated growth",
          },
          {
            icon: "/flashGreen.svg",
            title: "Great Colleagues",
            text: "Closely tied and supportive team",
          },
          {
            icon: "/flashRed.svg",
            title: "Take Charge",
            text: "As much as you are willing to take and show excellence",
          },
          {
            icon: "/flashPurple.svg",
            title: "Don’t stop learning",
            text: "An atmosphere where learning is always on the to do list",
          },
          {
            icon: "/flashBlack.svg",
            title: "Latest Technology Stack",
            text: "Work with cutting-edge tools and frameworks",
          },
          {
            icon: "/flashGray.svg",
            title: "Cross Domain Exposure",
            text: "Highly passionate and cohesive team of technology and business people",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="
              shadow-sm shadow-black/20 
              bg-white 
              rounded-3xl 
              p-8 
              flex flex-col 
              justify-start
              h-full
            "
          >
            <div className="flex items-center gap-x-2">
              <img src={item.icon} alt="flash" className="w-8" />
             <p className="text-[#475569] text-lg max-sm:text-base font-medium mb-1">
  {item.title}
</p>
            </div>


<p className="mt-5 text-base max-sm:text-sm leading-relaxed text-[#334155]">
  {item.text}
</p>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BuisnessModel;
