import React from 'react';
//import logo from './logo.svg';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Formations from './components/Formations'
import Infoperso from './components/Infoperso';
import './App.css';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <div className="container">
     <Infoperso /> 
      <div className="rightsection">
      <Experiences />
      <Formations />
      </div>
    </div>
  </div>
  
);


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
