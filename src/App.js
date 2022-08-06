import React, { useEffect } from 'react';
import './App.css';
import Video from './components/Main/Video';
import Tutorial from './components/Tutorial/Tutorial'

function App() {
  useEffect(() => {
    document.getElementById('main-content');
  });
  return (
    <React.Fragment>
        <div id="main-content" tab-index="1" className="flex flex-col items-center snap-y snap-mandatory overflow-scroll h-screen overflow-x-hidden">
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
          <Video />
        </div>
    </React.Fragment>
    

  );
}

export default App;
