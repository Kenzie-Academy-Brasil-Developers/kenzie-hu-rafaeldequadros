import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "../pages/cadastro";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

const Routers = () => {
    return (
        <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default Routers;
