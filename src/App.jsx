import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Homepage';

import ChangeLan from './ChangeLan';

function App() {
  return (
    <Router>
      <ChangeLan />
      <Routes>
        <Route path="/:lang/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/en/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
