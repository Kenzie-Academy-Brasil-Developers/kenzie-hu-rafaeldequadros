import { Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/Login";

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
