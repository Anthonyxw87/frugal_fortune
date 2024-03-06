import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';
import Trends from './pages/Trends';
import Investments from './pages/Investments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/investments" element={<Investments />} />
      </Routes>
    </Router>
  );
}

export default App;
