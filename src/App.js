import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './components/Dashboard';
import ChecklistPage from './components/Checklist';
import FormPage from './components/ChecklistForm';
import './App.css';
import Navbar from './components/layout/Navbar';
import FooterSection from './components/layout/FooterSection';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<DashboardPage />} />
            <Route path="/checklist/:id" element={<ChecklistPage />} />
            <Route path="/add-checklist" element={<FormPage />} />
          </Routes>
        </main>
        <FooterSection />
      </div>
    </Router>
  );
};

export default App;
