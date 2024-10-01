import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import { AuthorizationRoot, Login, Register, Thread } from "./pages/index.ts";
import { AuthenticateProvider } from "./contexts/authenticate.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthenticateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorizationRoot />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/threads" element={<Thread />} />
        </Routes>
      </BrowserRouter>
    </AuthenticateProvider>
  </StrictMode>
);
