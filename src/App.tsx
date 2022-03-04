// import React from 'react';
import logo from './logo.svg';
import './App.css';
// import TitleClass from './components/title_class';
// import TitleFunctional from './components/title_functional';
import Title from './components/title_functional';

// function Title(props: any) {
//   return <div>
//     <h1>Nombre {props.name}</h1>
//     <h2>Apellido {props.apellido}</h2>
//   </div>;
// }

const name = 'Goku';
function App() {
  return (
    <div className="App">
      <h1>Hola Soy {name} </h1>
      <Title name='Goku' lastName='Emilio'/>
      {/* <Title name={'goku'} apellido={'stward'} /> */}
      {/* <TitleFunctional name={'Hola soy Veguetta'} /> */}
      {/* <TitleClass name={'Hola soy Goku'}/>
       */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
