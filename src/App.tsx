import React from 'react';
import PokemonCards from './components/PokemonCards';

function App() {
  return (
    <div className="App">
      <PokemonCards 
      offset={0}
      pagination={40}
      />
    </div>
  );
}

export default App;
