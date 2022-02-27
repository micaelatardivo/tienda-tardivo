
import './App.css';
import Cart from './components/Cart'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import ItemDetailContainer from './components/ItemDetailContainer'; 
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import CartContextProvider from './context/CartContext';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
          <div>
            <header> 
              <NavBar /> 
              
            </header>
        
            <main >
              <div className="desktop-container">
                <Routes>
                  <Route 
                  path="/" 
                  element={<ItemListContainer greeting="Bienvenidos a CUARTO SET" />} />

                  <Route 
                  path="/category/:categoryName" 
                  element={<ItemListContainer greeting="Categoria"/>} />
                  
                  <Route 
                  path="/producto/:itemId" 
                  element={<ItemDetailContainer />} />

                  <Route 
                  path="/cart" 
                  element={<Cart />} />  
                  
                </Routes>
              </div>
            </main>

          </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
