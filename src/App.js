import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CounterPage from './pages/Counter';
import DropdownPage from './pages/Dropdown';
import ApiPage from './pages/Api';
import ModalPage from './pages/Modal';
import LucidePage from './pages/Lucide';
import StopwatchPage from './pages/StopwatchPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/dropdownpage" element={<DropdownPage />} />
        <Route path="/apipage" element={<ApiPage />} />
        <Route path="/modalpage" element={<ModalPage />} />
        <Route path="/lucide" element={<LucidePage />} />
        <Route path="/stopwatchpage" element={<StopwatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
