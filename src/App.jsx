import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import useReveal from "./hooks/useReveal";
import { useGlobalButtonSounds } from "./hooks/useGlobalButtonSounds";
import { usePageTransitionSound } from "./hooks/usePageTransitionSound";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Membresias from "./pages/Membresias";
import Horarios from "./pages/Horarios";
import Entrenadores from "./pages/Entrenadores";
import ComoLlegar from "./pages/ComoLlegar";
import FAQ from "./pages/FAQ";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Perfil from "./pages/Perfil";

function App() {
  useReveal();
  useGlobalButtonSounds();
  usePageTransitionSound();

  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/membresias" element={<Membresias />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/como-llegar" element={<ComoLlegar />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;