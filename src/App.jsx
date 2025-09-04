import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Passos from './components/Passos';
import Produtos from './components/Produtos';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/passos" element={<Passos />} />
          <Route path="/produtos" element={<Produtos />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;