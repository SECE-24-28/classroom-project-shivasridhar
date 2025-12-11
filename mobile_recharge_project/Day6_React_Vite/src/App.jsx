import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main style={{padding:20}}>
        <h1>Welcome to Mobile Recharge (Vite + React)</h1>
      </main>
      <Footer />
    </div>
  );
}