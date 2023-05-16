import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import Inicio from '../pages/Inicio/Inicio';
import Agendamentos from '../pages/Agendamentos/Agendamentos';

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Inicio />} />
                <Route path="/" element={<Inicio />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
            </Routes>
        </BrowserRouter>
    )
}
