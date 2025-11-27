import "./index.css";
import Navbar from "./navbar.jsx";
import Information from "./information.jsx";  
import Gallery from "./gallery.jsx";
import Services from "./services.jsx";
import Contact from "./contact.jsx";  
function App() {
  return (
    <div className="App">
      <Navbar />
      <Information />
      <Gallery />
      <Services />
      <Contact />

    </div>
  );
}
export default App;