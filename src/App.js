import './App.css';
import Header from './components/Header/Header';
import Inputs from './components/Inputs/Inputs';
import Result from './components/Result/Result';
import React, { useState } from 'react';

function App() {

  const [inputs, setInputs] = useState('');
  const HandleClick = input => setInputs(input);

  return (
    <div className="App">
      <Header />
      <Inputs HandleClick={HandleClick} />
      { inputs && <Result inputs={inputs} />}
    </div>
  );
}

export default App;
