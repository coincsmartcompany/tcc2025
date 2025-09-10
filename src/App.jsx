import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Passos from './components/Passos';
import Produtos from './components/Produtos';
import Equipe from './components/Equipe';
import Artigo from './components/Artigo';
import Jogo from './components/Jogo';
import HomeDark from './componentsDark/HomeDark';
import PassosDark from './componentsDark/PassosDark';
import ProdutosDark from './componentsDark/ProdutosDark';
import EquipeDark from './componentsDark/EquipeDark';
import ArtigoDark from './componentsDark/ArtigoDark';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passos" element={<Passos />} />
          <Route path="/produtos" element={<Produtos />} /> 
          <Route path="/equipe" element={<Equipe />} /> 
          <Route path="/artigo" element={<Artigo />} /> 
          <Route path="/jogo" element={<Jogo />} /> 
          <Route path="/dark" element={<HomeDark />} />
          <Route path="/passosdark" element={<PassosDark />} />
          <Route path="/produtosdark" element={<ProdutosDark />} /> 
          <Route path="/equipedark" element={<EquipeDark />} /> 
          <Route path="/artigodark" element={<ArtigoDark />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;