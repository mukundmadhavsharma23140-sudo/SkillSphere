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

import Announcements from "./pages/app/Announcement";
import MyCourses from "./pages/app/MyCourses";
import Exams from "./pages/app/Exams";
import Certificates from "./pages/app/Certificates";



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
          <Route path="announcements" element={<Announcements />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="exams" element={<Exams />} />
          <Route path="certificates" element={<Certificates />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


