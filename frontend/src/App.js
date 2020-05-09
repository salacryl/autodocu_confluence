import React from 'react';
import AMForm from './form';
import ScriptDownloader from './scriptdownload';
import './App.css';

const  App = () =>{
  return (
    <div>
      <h1 >Autodocumention for DiCV Mediawiki</h1>
      <div className="App">
      <ScriptDownloader />
        <AMForm/>
        
      </div>
    </div>
  );
}

export default App;
