import React from 'react';
import PokemonList from './components/PokemonList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header account=""/>
      <PokemonList 
      offset={0}
      pagination={20}
      />
      <Footer/>
    </div>
  );
}

export default App;
