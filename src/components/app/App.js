import { useState } from 'react';
import './App.scss';

const App = () => {
  const [result, setResult] = useState('');
  const [result2, setResult2] = useState('');
  const [operation, setOperation] = useState('');

  const addNumber = (btn) => {
    if (result === '') {
      if (btn === '.') {
        setResult('0.')
      } else {
        setResult(btn);
      }
    } else if ( operation !== '') {
      setResult2(btn);
    } else {
      setResult(result+btn);
    }
  };

  const AC = () => {
    setResult('');
    clean();
  };

  const addOperator = (i) => {
    setOperation(i);
  };

  const calculate = () => {
    switch (operation) {
      case '+':
        setResult(parseInt(result)+parseInt(result2));
        clean();
        break;
      case '-':
        setResult(parseInt(result)-parseInt(result2));
        clean();
        break;
      case 'x':
        setResult(parseInt(result)*parseInt(result2));
        clean();
        break;
      case '/':
        setResult(parseInt(result)/parseInt(result2));
        clean();
        break;
      default:
        console.log('you shouldnt see this!');
    }
  }

  const clean = () => {
    setResult2('');
    setOperation('');
  };

  return (
    <div className="App container mx-6">
      <div className='row row-container'>
        <div className='col-12 my-auto calculator text-end'>
          <div className='row'>
            <div className='col-12 px-0'>
            <p className='text-end display my-0'>{result === '' ? '0' : result}{operation}{result2}</p>
              <p className='text-end display my-0' id='display'>{result === '' ? '0' : (operation === '' ? result : (result2 === '' ? '0': result2))}</p>
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='one' onClick={() => {addNumber('1')}}>1</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='two' onClick={() => {addNumber('2')}}>2</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='three' onClick={() => {addNumber('3')}}>3</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='add' onClick={() => {addOperator('+')}}>+</button>
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='four' onClick={() => {addNumber('4')}}>4</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='five' onClick={() => {addNumber('5')}}>5</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='siz' onClick={() => {addNumber('6')}}>6</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='substract' onClick={() => {addOperator('-')}}>-</button>
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='seven' onClick={() => {addNumber('7')}}>7</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='eight' onClick={() => {addNumber('8')}}>8</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='nine' onClick={() => {addNumber('9')}}>9</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='multiply' onClick={() => {addOperator('x')}}>x</button>
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='clear' onClick={AC}>AC</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='zero' onClick={() => {addNumber('0')}}>0</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id="decimal" onClick={() => {addNumber('.')}}>.</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='divide' onClick={() => {addOperator('/')}}>/</button>
            </div>
          </div>
          <div className='row'>
          <div className='col-12 d-grid gap-2'>
          <button type="button" className="btn btn-primary" onClick={calculate} id='equals'>=</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
