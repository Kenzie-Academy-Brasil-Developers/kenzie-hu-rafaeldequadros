import { Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "../pages/cadastro";
import Login from "../pages/login";

const Routers = () => {
    return (
        <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/cadastro" />} />
        </Routes>
    );
};

export default Routers;
