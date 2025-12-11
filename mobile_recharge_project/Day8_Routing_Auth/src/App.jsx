import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RechargePlans from './pages/RechargePlans';
import { AuthProvider } from './context/AuthContext';

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <header style={{padding:10,background:'#eee'}}><Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/plans">Plans</Link></header>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/plans" element={<RechargePlans/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}