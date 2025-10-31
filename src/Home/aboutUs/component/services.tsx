import Testimony from './reviews'

const Services = () => {
  return (
    <div className="relative h-screen max-sm:h-full px-24 max-xl:px-10 max-md:px-5  flex flex-col justify-center bg-gray-500 overflow-hidden">
      {/* Background image */}
      <img 
        src="/servicePage.jpg" 
        alt="Services background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

     {/* Text content */}
      <div className="relative z-10 text-white flex flex-col justify-center">
        <div className="my-8 ">
          <h1 className="text-4xl font-semibold max-xl:text-3xl max-md:text-2xl">
            Our Services: Building Your Digital Advantage
          </h1>
          <p className="text-lg mt-2 max-xl:text-base max-md:text-sm">
            BoltNex Technology offers a focused suite of high-value services,
            underpinned by our proprietary toolkits and expertise:
          </p>
        </div>

        <Testimony />
      </div>
    </div>
  )
}

export default Services
