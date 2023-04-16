import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sobre from "./pages/Sobre";
import Cadastro from "./pages/Cadastro";
import Erro from "./pages/Erro";
import Produto from "./pages/Produto";
import Vitrine from "./pages/Vitrine";
import Header from "./components/Header";
import Footer from "./components/Footer";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/" element={<Vitrine />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Produto/:id" element={<Produto />} />
          

          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default RoutesApp;
