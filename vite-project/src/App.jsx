import { useState } from 'react'
import React from 'react';
import './App.css';
import Header from './components/Header';
import LeftSidebar from './components/LeftAside';
import MainContent from './components/Main';


function App() {
  return (
    <div>
      <Header />
      <div>
        <LeftSidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App
