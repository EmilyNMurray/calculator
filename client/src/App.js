import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // do some stuff

  const [display, setDisplay] = useState('');
  //const [value, setValue] = useState('');

  const handleButtonClick = (val) => {
    setDisplay(display + val);
    //setValue(value + val);
  }

  const onSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/math', {input: display});
      setDisplay(response.data);
    }
    catch(error){
      console.error('Error', error);
    }
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