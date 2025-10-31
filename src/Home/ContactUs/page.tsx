import ContactForm from "./component/contactForm";

const ContactUs = () => {
  return (
    <section className="h-screen max-sm:h-auto flex flex-col justify-center items-center">

    <div className="px-24 max-xl:px-10 max-md:px-5 pt-28 h-[85vh] m flex justify-center w-full mx-auto items-start  gap-x-20">
      <div className="relative max-xl:hidden w-full max-w-lg rounded-2xl h-full p-10 flex flex-col  bg-gray-500 overflow-hidden">
        <img
          src="/contactImg.png"
          alt="Services background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 text-white  ">
          <article className="w-10/12">
            <h1 className="text-3xl font-semibold">Let's Build Your Market-Disrupting Platform.</h1>
            <p className="text-lg mt-6 text-[#C9C9C9]">
              Connect with our UK-managed, globally focused team to discuss your
              next scalable, localized technology project.
            </p>
            <div className="flex flex-col gap-y-3 mt-14">
<div className="flex items-center gap-x-3">
              <img src="/phone.svg" alt="phone" className="" />
              <span className=" text-lg">+44 20 8123 1234</span>
            </div><div className="flex items-center gap-x-3">
              <img src="/email.svg" alt="email" className="" />
              <span className=" text-lg">boltnexgmail.com</span>
            </div><div className="flex items-center gap-x-3">
              <img src="/locationwhite.svg" alt="locationwhite" className="" />
              <span className=" text-lg">Leeds, United Kingdom.</span>
            </div>
            </div>

            
          </article>
        </div>
      </div>
      <ContactForm />
    </div>
    </section>

  );
};

export default ContactUs;
