import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetail/Items';
import React from 'react'
import ItemDetail from './components/ItemDetail/ItemDetail';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';
import { DataProvider } from './services/Context';
import Catalogues from './components/ItemDetail/Catalogues';


function App() {
  return (
    <DataProvider >
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <ItemDetailContainer />
          </Route>
          <Route path="/catalogue/:ids">
            <Catalogues  />
          </Route>
          
          <Route path="/item/:id">
            <ItemDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
