import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header2 from './My components/Header2';
import Header1 from './My components/Header1';
import Footer from './My components/Footer';
import Poster from './My components/Poster'


function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <Poster/>
      <Footer />

      <h1>running</h1>
    </div>
  );
}

export default App;
