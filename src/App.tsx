import React from 'react';
import './App.css';
import { Animation } from './component/Animation';
import { Header } from './component/Header';
import { Hero } from './component/Hero';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Animation name='Parvez' isLoggedIn={false} messageCount={10}></Animation>
     
    </div>
  );
}

export default App;
