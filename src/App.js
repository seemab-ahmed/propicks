import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <div>
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;