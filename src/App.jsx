import { useState } from 'react'
import './App.css'

function App() {
  
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    const clickedValue = e.target.value;
    if (clickedValue === "DE") {
      setInputValue((prevInput) => prevInput.slice(0, -1));
    } else {
      setInputValue((prevInput) => prevInput + clickedValue);
    }
  };

  const clearInput = () => {
    setInputValue('');
  };

  const calculateResult = () => {
    try {
      const result = eval(inputValue);
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };
  return (
    <div style={{minHeight:'100vh', width:'100%'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'380px',height:'450px'}} className='bg-secondary p-5 rounded'>
        <div className='d-flex justify-content-center align-items-center'>
          <form action="">
            <div>
              <input type="text" className='displayText' value={inputValue} style={{border:'none',fontSize:"30px"}}/>
            </div>
            <div>
              <input type="button" value="AC" className='buttons btn btn-warning' onClick={clearInput}/>
              <input type="button" value="DE" className='buttons btn btn-warning' onClick={handleInput}/>
              <input type="button" value="." className='buttons' onClick={handleInput}/>
              <input type="button" value="/" className='buttons' onClick={handleInput}/>
            </div>
            <div>
              <input type="button" value="7" className='buttons' onClick={handleInput}/>
              <input type="button" value="8" className='buttons' onClick={handleInput}/>
              <input type="button" value="9" className='buttons' onClick={handleInput}/>
              <input type="button" value="*" className='buttons' onClick={handleInput}/>
            </div>
            <div>
              <input type="button" value="4" className='buttons' onClick={handleInput}/>
              <input type="button" value="5" className='buttons' onClick={handleInput}/>
              <input type="button" value="6" className='buttons' onClick={handleInput}/>
              <input type="button" value="+" className='buttons' onClick={handleInput}/>
            </div>
            <div>
              <input type="button" value="1" className='buttons' onClick={handleInput}/>
              <input type="button" value="2" className='buttons' onClick={handleInput}/>
              <input type="button" value="3" className='buttons' onClick={handleInput}/>
              <input type="button" value="-" className='buttons' onClick={handleInput}/>
            </div>
            <div>
              <input type="button" value="00" className='buttons' onClick={handleInput}/>
              <input type="button" value="0" className='buttons' onClick={handleInput}/>
              <input type="button" value="=" className='buttons btn btn-warning sum-button' onClick={calculateResult}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
