import freecodecamplogo from './imagenes/freecodecamp-logo.png'
import './App.css';
import Boton from './componentes/Boton'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freecodecamplogo}
        className='freecodecamp-logo'
        alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora' >
        <div className='fila'>
          <Boton>1</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
