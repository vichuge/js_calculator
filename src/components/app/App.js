import { useState } from 'react';
import './App.scss';

const App = () => {
  const [result, setResult] = useState('');
  const [result2, setResult2] = useState('');
  const [operation, setOperation] = useState('');

  const addNumber = (btn) => {
    if (result === '') {
      if (btn === '0') {
        setResult('');
      } else {
        setResult(btn);
      }
    } else if ( operation !== '') {
      if (result2 === '') {
        if (btn === '0') {
          setResult2('');
        } else {
          setResult2(btn);
        }
      } else {
        setResult2(result2+btn);
      }
    } else {
        setResult(result+btn);
    }
  };

  // useEffect(() => {
  //   calculate();
  // },[result2]);

  const AC = () => {
    setResult('');
    partialClean();
  };

  const addOperator = (i) => {
    if (operation !== '') {
      if (result2 === '') {
        setOperation(i);
      } else {
        calculate();
      }
    }
    setOperation(i);
  };

  const calculate = () => {
    switch (operation) {
      case '+':
        setResult(parseFloat(result)+parseFloat(result2));
        partialClean();
        break;
      case '-':
        setResult(parseFloat(result)-parseFloat(result2));
        partialClean();
        break;
      case 'x':
        setResult(parseFloat(result)*parseFloat(result2));
        partialClean();
        break;
      case '/':
        setResult(parseFloat(result)/parseFloat(result2));
        partialClean();
        break;
      default:
    }
  }

  const partialClean = () => {
    setResult2('');
    setOperation('');
  };

  const addPoint = () => {
    if (operation === '') {
      if (result === '' || result === '0') {
        setResult('0.');
      } else if (!result.includes('.')) {
        setResult(result+'.');
      }
    } else {
      if (result2 === '') {
        setResult2('0.');
      } else if (!result2.includes('.')) {
        setResult2(result2+'.');
      } 
    }
  };

  const addMinus = () => {
    if (result === '') {
      setResult('-');
    } else if (operation === '') {
      setOperation('-');
    } else if (result2 === '') {
      setResult2('-');
    } else {
      calculate();
      setOperation('-');
    }
  };

  const addPlus = () => {
    if (result === '') {
      setResult('+');
    } else if (operation === '') {
      setOperation('+');
    } else if (result2 === '') {
      setResult2('+');
    } else if (result === '-') {
      setResult('');
      setOperation('+');
    } else if (result2 === '-') {
      setResult2('');
      setOperation('+');
    } else {
      calculate();
      setOperation('+');
    }
  };

  return (
    <div className="App container mx-6">
      <div className='row row-container'>
        <div className='col-12 my-auto calculator text-end'>
          <div className='row'>
            <div className='col-12 px-0'>
            <p className='text-end display my-0'>{result === '' ? '0' : result}{operation}{result2}</p>
              {/* <p className='text-end display my-0' id='display'>{result === '' ? '0' : (operation === '' ? result : (result2 === '' ? '0': result2))}</p> */}
              <p className='text-end display my-0' id='display'>{result === '' ? '0' : result }</p>
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
              <button type="button" className="btn btn-primary btn-square-md" id='add' onClick={addPlus}>+</button>
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
              <button type="button" className="btn btn-primary btn-square-md" id='six' onClick={() => {addNumber('6')}}>6</button>
            </div>
            <div className='col-3'>
              <button type="button" className="btn btn-primary btn-square-md" id='subtract' onClick={addMinus}>-</button>
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
              <button type="button" className="btn btn-primary btn-square-md" id="decimal" onClick={addPoint}>.</button>
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
