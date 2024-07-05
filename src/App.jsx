
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import DynamicPage from './DynamicPage';
import StaticPage from './StaticPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dynamic">Dynamic Page</Link></li>
            <li><Link to="/static">Static Page</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dynamic" element={<DynamicPage />} />
          <Route path="/static" element={<StaticPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
