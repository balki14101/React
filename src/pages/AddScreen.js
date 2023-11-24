import { red } from '@mui/material/colors';
import React, { useState } from 'react';

import {useNavigate} from 'react-router-dom'


import './AddScreen.css'; // Import a CSS file for styling


const AddScreen = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const navigate = useNavigate()


  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleButtonClick1 = () => {
    console.log('Button 1 Clicked! Input 1:', input1);
  };

  const handleButtonClick2 = () => {
    console.log('Button 2 Clicked! Input 2:', input2);
    navigate('/')

  };

  return (
    <div className='addcontainer'>
         <img 
      src="https://safeguardsecuritygeorgia.com/wp-content/uploads/2017/03/Blue-lock-background-1024x683.jpg"
      alt="new"
      />
    <div className="context">
        <div>
            <p>
        Cluster Name

            </p>
            <input
          type="text"
          value={input1}
          onChange={handleInput1Change}
          className="input"
        />
        </div>

      <div>
            <p>
        IP Address

            </p>
            <input
          type="text"
          value={input2}
          onChange={handleInput2Change}
          className="input"
        />
        </div>
        <div className='bottomButton'>
        <button className="button" onClick={handleButtonClick1}>
        Add
      </button>
      <button className="button" onClick={handleButtonClick2}>
        Cancel
      </button>
        </div>
      
    </div>
    </div>
  );
};


export default AddScreen;