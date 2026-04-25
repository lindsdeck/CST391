import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CenterList from './components/CenterList';
import NavBar from './components/NavBar';
import CenterForm from './components/CenterForm';
import CenterDetails from './components/CenterDetails';
import EditCenter from './components/EditCenter';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<CenterList />} />
        <Route path="/new" element={<CenterForm />} />
        <Route path="/centers/:id" element={<CenterDetails />} />
        <Route path="/edit/:id" element={<EditCenter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;