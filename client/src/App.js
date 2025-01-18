import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // do some stuff

  const [display, setDisplay] = useState('');

  const handleButtonClick = (val) => {
    setDisplay(display + val);

  }

  const onSubmit = async () => {
    
  }
   
  return (

    <div>
      <div>
        {display}
      </div>
      <div>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={onSubmit}>submit</button>
      </div>
    </div>

  );
}

export default App;