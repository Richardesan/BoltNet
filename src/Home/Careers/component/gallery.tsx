
const Gallery = () => {
  return (
    <div
      className="
        h-125 
        max-lg:h-auto
        grid grid-cols-3 gap-3 
        overflow-hidden
        max-lg:grid-cols-2 
        max-md:grid-cols-1
      "
    >
      {/* LEFT COLUMN */}
      <article className="flex flex-col gap-y-3 overflow-hidden">
        <div className="h-60 overflow-hidden rounded-md object-center object-cover shadow shadow-black/30">
          <img
            src="/car1.jpg"
            alt="img"
            className="object-center w-full h-full object-cover"
          />
        </div>
        <div className="h-60 overflow-hidden rounded-md object-center object-cover shadow shadow-black/30">
          <img
            src="/car2.jpg"
            alt="img"
            className="object-center w-full h-full object-cover"
          />
        </div>
      </article>

      {/* MIDDLE COLUMN */}
      <div className="h-123 max-lg:h-60 w-full overflow-hidden rounded-md object-center object-cover shadow shadow-black/30">
        <img
          src="/car3.jpg"
          alt="img"
          className="object-center w-full h-full object-cover"
        />
      </div>

      {/* RIGHT COLUMN */}
      <article className="flex flex-col gap-y-3 overflow-hidden">
        <div className="h-60 overflow-hidden rounded-md object-center object-cover shadow shadow-black/30">
          <img
            src="/car4.jpg"
            alt="img"
            className="object-center w-full h-full object-cover"
          />
        </div>
        <div className="h-60 overflow-hidden rounded-md object-center object-cover shadow shadow-black/30">
          <img
            src="/car5.jpg"
            alt="img"
            className="object-center w-full h-full object-cover"
          />
        </div>
      </article>
    </div>
  );
};

export default Gallery;
