import React from 'react';
import './App.css';
import Whitening from './pages/whitening/Whitening';
import Home from './pages/home/Home';
import Appointments from './pages/appointments/Appointments';
import Cavities from './pages/cavities/Cavities';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Whitening />
      <Appointments />
      <Cavities />
    </>
  );
}

export default App;