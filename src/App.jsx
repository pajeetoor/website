import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents';
import Preview from './pages/Preview';
import SolanaWallet from './pages/SolanaWallet';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#138808]/20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/solana-wallet" element={<SolanaWallet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
