import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Flex from './Flex';
// import Grid from './Grid';
// import NewFlex from './NewFlex';
// import PromiseView from './Promise';
import LocalStorage from './localStorage';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <LocalStorage /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hola soy Goku</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
