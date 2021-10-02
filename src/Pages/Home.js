import React, {useState} from "react";
import Header from "../Header";
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

function Home(){
    const [contador, setContador] = useState(0);
    function increment(){
      setContador(contador+1);
    }
  
    return (
      <div className="App">
        
        <Header title="Header Param" />
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/cadastro">Acessar Cadastro</Link>
        <p>
          <input type="button" value="Clique" onClick={increment} />
        </p>
        <p>{contador}</p> cliques!
      </div>
    );
}
 
export default Home;
