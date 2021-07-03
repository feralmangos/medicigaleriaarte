import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/Navbar/NavBar/ItemListContainer';


function App() {
  const workInProgress = ()=>alert("Functionality not yet available")
  return (
    <div className="App">
      <header>
        <NavBar workInProgress={workInProgress} />
        <ItemListContainer greetings="Hello Stranger..."/>
        <ItemListContainer greetings="Welcome to Our Art Gallery"/>
      </header>
    </div>
  );
}

export default App;