import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import About from './components/pages/About';
import Contacto from './components/pages/Contacto';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/about">About</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
            <Routes>
            <Route path="/" element={<Inicio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </Router>
    );
};

export default App;
