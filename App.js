import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.js';
import SearchBar from './components/searchMercado.js';
import Products from './components/Products.js';
import Product from './components/Product.js';
import ProductDetail from './components/ProductDetail.js';
import SearchBar1 from './components/searchMercado1';
import Footer from './components/Footer';




function App() {
  
  return ( 
    <div className="App">
    <Nav />

      <header className="App-header">

        <Route
          exact path='/'
          render={() => <Products/>}
        />
        
          <Route
          exact path='/producto/detail/:id'
          component={({match}) => 
            <ProductDetail id={match.params.id}/>
          }                   
        />   
        
      </header>
    </div>
  );
}
export default App;