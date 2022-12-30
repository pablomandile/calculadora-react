import freecodecamplogo from './imagenes/freecodecamp-logo.png'
import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/BotonClear';
import BotonIgual from './componentes/BotonIgual';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
      setInput(input + valor);
  };

  const calcularResultado = () =>{
    if (input){
      setInput(evaluate(input));
    } 
  };
  

  return (
    <div className="App">
      <div className='contenedor-calculadora' >
        <div>
          <Pantalla input={input}/>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>(</Boton>
          <Boton manejarClick={agregarInput}>)</Boton>
          <Boton manejarClick={agregarInput}>x!</Boton>
          <Boton manejarClick={agregarInput}>x²</Boton>
          <Boton manejarClick={agregarInput}>&radic;</Boton>
          <Boton manejarClick={agregarInput}>n&radic;</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>sin</Boton>
          <Boton manejarClick={agregarInput}>cos</Boton>
          <Boton manejarClick={agregarInput}>tg</Boton>
          <Boton manejarClick={agregarInput}>x</Boton>
          <Boton manejarClick={agregarInput}>∛</Boton>
          <Boton manejarClick={agregarInput}>x<sup>n</sup></Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
          <Boton manejarClick={agregarInput}>%</Boton>
          <Boton manejarClick={agregarInput}>ln</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
          <Boton manejarClick={agregarInput}>log</Boton>
          <Boton manejarClick={agregarInput}>e</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
          <BotonClear manejarClear={() => setInput('')}>AC</BotonClear>
          <BotonIgual manejarClick={calcularResultado}>=</BotonIgual>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>π</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
          <Boton manejarClick={agregarInput}>MR</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
