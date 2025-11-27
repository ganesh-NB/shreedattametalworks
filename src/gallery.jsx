export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1581092795360-f13d5c881d5f",
    "https://images.unsplash.com/photo-1592813630413-3f43e7f4a216",
    "https://images.unsplash.com/photo-1581090700227-263f8b6adc24",
    "https://images.unsplash.com/photo-1581093588401-06cd5f4e8f4a",
    "https://images.unsplash.com/photo-1621905251189-08b46a66ff80",
    "https://images.unsplash.com/photo-1533158326339-7f3cf240435a",
  ];

  return (
    <section id="gallery" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-slate-800 mb-6">
          Work Gallery
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Here are some of our finished projects showcasing high-precision fabrication,
          welding quality, and expert craftsmanship.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((url, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={url}
                alt="work sample"
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
