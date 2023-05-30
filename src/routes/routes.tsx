import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"; // Importe o BrowserRouter separadamente

import Inicio from '../pages/Inicio/Inicio';
import Agendamentos from '../pages/Agendamentos/Agendamentos';

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/inicio" replace />}
                />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
            </Routes>
        </BrowserRouter>
    );
}
