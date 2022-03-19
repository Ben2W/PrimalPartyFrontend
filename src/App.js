import React from 'react';
import './App.css';
import Card from './components/Card.js';

function App() {
  return (
    <div className="App">
      <Card 
      title="Pizza Party" 
      date="March 18, 2022" 
      img="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6" 
      button="View More" 
      desc="This is a pizza party. Bruh bruh bruh bruh bruh bruh bruh bruh."
      />

      <Card 
      title="Pool Party" 
      date=" 18, 2022" 
      img="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6" 
      button="View More" 
      desc="This is a pizza party. Bruh bruh bruh bruh bruh bruh bruh bruh."
      />
    </div>
  );
}

export default App;
