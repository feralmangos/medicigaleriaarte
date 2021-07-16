import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetail/Items';
import React from 'react'


function App() {
  const workInProgress = () => alert("Functionality not yet available")
  return (
    <div className="App">
      <header>
        <NavBar workInProgress={workInProgress} />
      </header>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
