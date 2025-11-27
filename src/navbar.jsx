import { useState } from "react";
 function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          ShreeDatta<span className="text-orange-400">MetalWorks</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#information" className="hover:text-orange-400 transition">Information</a>
          <a href="#services" className="hover:text-orange-400 transition">Services</a>
          <a href="#gallery" className="hover:text-orange-400 transition">Work Gallery</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-800 text-white px-6 py-4 space-y-4 text-lg shadow-lg animate-fadeIn">
          <a
            href="#information"
            className="block hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Information
          </a>
          <a
            href="#gallery"
            className="block hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Work Gallery
          </a>
          <a
            href="#services"
            className="block hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
  export default Navbar;
