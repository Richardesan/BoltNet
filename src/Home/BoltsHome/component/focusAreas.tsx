import Hyperspeed from "../../../components/Hyperspeed";

const FocusAreas = () => {
  return (
    <section className="relative bg-bolts-blue text-white overflow-hidden py-24 px-24 max-lg:px-12 max-md:px-6">
      {/* Hyperspeed Canvas in Background */}
      <div className="absolute inset-0">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x0f172a,
              islandColor: 0x1e293b,
              background: 0x082385,
              shoulderLines: 0x38bdf8,
              brokenLines: 0x94a3b8,
              leftCars: [0x3461ff, 0x2563eb, 0x06b6d4],
              rightCars: [0xc084fc, 0x7e22ce, 0x6b21a8],
              sticks: 0xe0ff22,
            },
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl max-xl:mx-auto flex flex-col justify-center items-start max-md:items-center text-left max-md:text-center">
        <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-semibold">
          Proven. Localized. Disruptive.
        </h1>

        <p className="py-6 text-lg max-md:text-base text-white/90">
          Our success is validated by our flagship internal product, BoltNex
          BuyHub—an integrated e-commerce ecosystem that has achieved significant
          market traction in emerging economies.
        </p>

        {/* Bullet Points */}
        <article className="space-y-4 max-md:space-y-6">
          {[
            "Bridging the gap between traditional and digital commerce in high-growth markets.",
            "Overcoming logistical and cultural challenges unique to emerging economies.",
            "Building scalable, AI-powered infrastructure to handle exponential growth.",
            "Delivering locally relevant payment, logistics, and marketing ecosystems.",
          ].map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-x-3 max-md:gap-x-2 max-md:justify-center"
            >
              <img
                src="/check.svg"
                alt="check icon"
                className="w-5 h-5 mt-1 shrink-0"
              />
              <p className="text-white/90 text-base max-md:text-sm max-w-2xl">
                {point}
              </p>
            </div>
          ))}
        </article>

        <p className="text-black font-semibold mt-8 text-lg max-md:text-base">
          See How We Can Build Your Next Platform
        </p>
      </div>
    </section>
  );
};

export default FocusAreas;
