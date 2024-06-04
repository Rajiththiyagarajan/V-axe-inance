import React from 'react';
import { One } from './one'; 
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';

import Two from './Two';
import Three from './three';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<One /> }/>
        <Route path='/about' element={<Two/>} />

        
        <Route path='/service' element={<Three/>} />

      </Routes>
      

      
    </div>
    
    

    

    
  );
}

export default App;
