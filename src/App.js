import React, {useState} from 'react';
import './App.css';
import Routes from './routes';

function App() {
  const [contador, setContador] = useState(0);
  function increment(){
   setContador(contador+1);
  }
  return (
   <Routes /> 
  )
}

export default App;
