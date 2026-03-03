import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Us from "./Pages/Us.jsx";
import Services from "./Pages/Services.jsx";
import OurTeam from "./Pages/OurTeam.jsx";
import RequestForm from "./Pages/RequestForm.jsx";
import Reviews from "./components/Reviews.jsx";
import ChangeMode from "./components/ChangeMode.jsx";


// import Hero from "./components/Hero";

function App() {
  return (
    <HashRouter>

      <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-[#0d1117] dark:text-[#E6edf3] transition-colors duration-300">
        <Header />
 
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/us" element={<Us />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/request" element={<RequestForm />} />
          </Routes>
          <ChangeMode/>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
