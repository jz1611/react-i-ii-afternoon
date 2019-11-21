import React from 'react';
import InfoCard from './components/InfoCard';
import './reset.css';
import './App.css';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Home</h1>
      </header>
      <main>
        <InfoCard />
        <Toolbar />
      </main>
    </div>
  );
}

export default App;
