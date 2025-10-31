
const Join = () => {
  const JoingArray = [
    {
      title: "Software Engineer",
      Experience: "2+ years",
      Deadline: "30th June 2025",
    },
    {
      title: "Product Manager",
      Experience: "3+ years",
      Deadline: "15th July 2025",
    },
    {
      title: "UX/UI Designer",
      Experience: "2+ years",
      Deadline: "1st August 2025",
    },
    {
      title: "WordPress Developer",
      Experience: "4+ years",
      Deadline: "20th August 2025",
    },
    {
      title: "iOS Developer",
      Experience: "3+ years",
      Deadline: "5th September 2025",
    },
  ];

  const handleApply = (role: string, experience: string) => {
    const subject = encodeURIComponent(`Application for ${role}`);
    const body = encodeURIComponent(
      `Hello Boltnex Team,\n\nI am [Your Name], and I am applying for the ${role} position.\n\nMy experience: ${experience}\n\n[You can add more details here before sending.]\n\nThank you,\n[Your Name]`
    );
    window.location.href = `mailto:info@boltnex.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className=" px-24 max-xl:px-10 max-md:px-5 ">
      {/* HEADER */}
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl max-md:text-3xl font-semibold">
          Want to join team Boltnex?
        </h1>
        <p className="text-[#00000099] text-lg max-md:text-base mt-5 leading-relaxed">
          We’re always looking for creative, talented self-starters to join the
          Boltnex team. Check out our open roles below and fill out an
          application.
        </p>
      </div>

      {/* JOB LIST */}
      <div className="w-10/12 max-xl:w-11/12 max-sm:w-full mx-auto mt-12">
        {JoingArray.map((item, index) => (
          <div
            key={index}
            onClick={() => handleApply(item.title, item.Experience)}
            className="
              group 
              grid 
              grid-cols-4 
              max-md:grid-cols-2 
              max-sm:grid-cols-1 
              gap-4 
              items-center 
              text-[#001833] 
              cursor-pointer 
              p-5 
              my-6 
              bg-white 
              shadow-sm 
              shadow-black/10 
              rounded-xl 
              transition-all 
              duration-300 
              hover:shadow-md 
            "
          >
            <p className="text-lg max-sm:text-base font-semibold">
              {item.title}
            </p>

            <div>
              <p className="text-[#D4D4D4] text-sm font-semibold">Experience</p>
              <p className="font-medium">{item.Experience}</p>
            </div>

            <div>
              <p className="text-[#D4D4D4] text-sm font-semibold">Deadline</p>
              <p className="font-medium">{item.Deadline}</p>
            </div>

            <div className="flex justify-end max-sm:justify-start">
              <img
                src="/arrowLeft.svg"
                alt="arrowLeft"
                className="transition-all duration-300 ease-in-out group-hover:rotate-[-30deg] group-hover:filter group-hover:brightness-0 group-hover:invert-35 group-hover:sepia-100 group-hover:saturate-600 group-hover:hue-rotate-200 group-hover:contrast-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Join;
