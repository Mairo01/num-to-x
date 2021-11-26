import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const fields = Array(9)
  .fill()
  .map((el, index) => { return {id: `field-${index + 1}`, value: index + 1, isDisabled: true} })

const time = localStorage.getItem('time') ? parseInt(localStorage.getItem('time')) : 1200

ReactDOM.render(
  <React.StrictMode>
    <App fields={fields} time={time}/>
  </React.StrictMode>,
  document.getElementById('react-container')
)
