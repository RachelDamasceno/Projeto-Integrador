import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DadosExtraidos from "./pages/DadosExtraidos";
import Sair from "./pages/Sair";
import Suporte from "./pages/Suporte";
import UploadsSalvos from "./pages/UploadsSalvos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/sair" element={<Sair />} />
          <Route path="/dadosExtraidos" element={<DadosExtraidos />} />
          <Route path="/uploadsSalvos" element={<UploadsSalvos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
