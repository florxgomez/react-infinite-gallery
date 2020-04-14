import React from 'react';
import './App.css';
import Images from './components/Images';

function App() {
  return (
    <div>
      <div id="root">
        <div className="hero is-fullheight is-bold ">
          <div className="container">
            <div className="header content">
              <h1 className="title is-1">Unsplash Gallery</h1>
            </div>
            <Images />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
