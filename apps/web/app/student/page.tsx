"use client";
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentLayout from './layout';
import DashboardPage from './dashboard';
import MyClassesPage from './classes';
import AssignmentsPage from './assignments';
import SchedulePage from './schedule';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="classes" element={<MyClassesPage />} />
          <Route path="assignments" element={<AssignmentsPage />} />
          <Route path="schedule" element={<SchedulePage />} />
        </Route>
      </Routes>
    </Router>
  );
}