import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Planner from './pages/Planner';
import './styles/main.css'; // ✅ Import your CSS

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-links"></div>
         <Link to="/">🏠 HOME </Link>
         <Link to="/planner">📝 PLANNER </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </Router>
  );
}

export default App;
