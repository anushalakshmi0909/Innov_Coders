import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import StudentsPage from "./components/StudentsPage";
import TutorsPage from "./components/TutorsPage";
import AttendancePage from "./components/AttendancePage";
import MarksPage from "./components/MarksPage";
import FeedbackPage from "./components/FeedbackPage";
import AnnouncementPage from "./components/Announcements";
import AdminSettingsPage from "./components/AdminSettings";
import HelpPage from "./components/HelpPage";
import RegisterForm from "./components/RegisterForm";
import Layout from "./components/Layout";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        {/* Protected Routes with Sidebar */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Layout setIsLoggedIn={setIsLoggedIn}>
                <DashboardPage />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/students"
          element={
            isLoggedIn ? (
              <Layout setIsLoggedIn={setIsLoggedIn}>
                <StudentsPage />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="/students/:id"
        element={isLoggedIn ? (
          <Layout setIsLoggedIn={setIsLoggedIn}>
          <StudentDetails /> </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }/>

        <Route
          path="/tutors"
          element={
            isLoggedIn ? (
              <Layout setIsLoggedIn={setIsLoggedIn}>
                <TutorsPage />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/attendance"
          element={
            isLoggedIn ? (
              <Layout setIsLoggedIn={setIsLoggedIn}>
                <AttendancePage />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/marks"
          element={
            isLoggedIn ? (
              <Layout setIsLoggedIn={setIsLoggedIn}>
                <MarksPage />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/feedback"
          element={
            isLoggedIn ? (
              <Layout setIsLoggedIn={setIsLoggedIn}>
                <FeedbackPage />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/announcements"
          element={
            isLoggedIn ? (
              <Layout setIsLoggedIn={setIsLoggedIn}>
                <AnnouncementPage />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/adminsettings"
          element={
            isLoggedIn ? (
              <Layout setIsLoggedIn={setIsLoggedIn}>
                <AdminSettingsPage />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/help"
          element={
            isLoggedIn ? (
              <Layout setIsLoggedIn={setIsLoggedIn}>
                <HelpPage />
              </Layout>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
};

export default App;
