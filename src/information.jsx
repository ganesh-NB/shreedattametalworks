export default function Information() {
  return (
    <section
      id="information"
      className="bg-gray-100 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-slate-800 mb-6">
          About ShreeDattaMetalWorks
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          ShreeDattaMetalWorks is a trusted name in the field of 
          <span className="font-semibold text-slate-900"> metal fabrication, welding, and sheet metal engineering</span>.  
          With a strong commitment to quality and precision, we deliver reliable industrial and commercial solutions that are built to last.  
          Our team uses advanced machinery and skilled craftsmanship to create products tailored to client needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-slate-800 mb-2">✔ Experience</h3>
            <p className="text-gray-600">
              Years of hands-on experience in fabrication, welding, and metal structure development.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-slate-800 mb-2">✔ Quality Assurance</h3>
            <p className="text-gray-600">
              Every project is handled with attention to detail using durable materials and standards.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-slate-800 mb-2">✔ Custom Solutions</h3>
            <p className="text-gray-600">
              Fully customized fabrication work crafted exactly as per your needs and requirements.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
