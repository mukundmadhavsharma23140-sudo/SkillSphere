import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import PublicLayout from "./layouts/PublicLayout";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Courses from "./pages/Courses";
import Dashboard from "./pages/app/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLoginSuccess(userData) {
    setIsAuthenticated(true);
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* 🌍 PUBLIC LAYOUT (NO PATH) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
        </Route>

        {/* 🔐 APP LAYOUT */}
        <Route
          path="/app"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


