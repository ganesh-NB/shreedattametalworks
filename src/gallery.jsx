export default function Gallery() {
  const images = [
"WhatsApp Image 2025-12-03 at 20.16.19_6e78dba0.jpg",
"WhatsApp Image 2025-12-03 at 20.16.19_24dd0eeb.jpg",
"WhatsApp Image 2025-12-03 at 20.16.19_ef5d79b3.jpg",
"WhatsApp Image 2025-12-03 at 20.17.05_7e192761.jpg",
"WhatsApp Image 2025-12-03 at 20.17.05_b5ff7fd9.jpg",
"WhatsApp Image 2025-12-03 at 20.17.06_cd720616.jpg",
"WhatsApp Image 2025-12-03 at 20.17.13_ed31d839.jpg",
"WhatsApp Image 2025-12-03 at 20.17.14_5f4ff7a3.jpg",
"WhatsApp Image 2025-12-03 at 20.19.36_1dae0f30.jpg",
"WhatsApp Image 2025-12-03 at 20.19.40_171e90fe.jpg",
"WhatsApp Image 2025-12-03 at 20.19.41_61350078.jpg",
"WhatsApp Image 2025-12-03 at 20.19.45_af178625.jpg",
"WhatsApp Image 2025-12-03 at 20.19.46_6face30a.jpg",
"WhatsApp Image 2025-12-03 at 20.19.48_456324c3.jpg",
"WhatsApp Image 2025-12-03 at 20.17.08_cf629d3b.jpg"
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
