import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { About, Contact, Education, Header, Home, Service } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
