import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CounterPage from './pages/Counter';
import DropdownPage from './pages/Dropdown';
import ApiPage from './pages/Api';
import ModalPage from './pages/Modal';
function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<CounterPage/>} />
      <Route path="/dropdownpage" element={<DropdownPage />} />
      <Route path="/apipage" element={<ApiPage />} />
      <Route path="/modalpage" element={<ModalPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
