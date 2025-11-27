import { Wrench, Cog, Hammer } from "lucide-react";

 function Services() {
  const services = [
    {
      title: "Custom Metal Fabrication",
      description:
        "Precision-cut and custom-designed metal structures for industrial and commercial needs.",
      icon: <Wrench className="w-10 h-10 text-blue-700" />,
    },
    {
      title: "Welding & Assembly",
      description:
        "Professional MIG, TIG, and arc welding with top-grade equipment and skilled craftsmanship.",
      icon: <Hammer className="w-10 h-10 text-blue-700" />,
    },
    {
      title: "Machine Repairs & Maintenance",
      description:
        "Reliable repair, servicing, and restoration of damaged or worn-out metal machinery." 
      ,},
  ];

  return (
    <section id="services" className="py-16 bg-gray-100 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-slate-800 mb-6">
          Our Services
        </h2>
        
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          We specialize in high-quality metal fabrication, welding, machinery repair,
          and custom industrial solutions.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl 
                         transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;