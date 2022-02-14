
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import ItemDetailContainer from './components/ItemDetailContainer'; 
import { BrowserRouter, Routes , Route } from 'react-router-dom';


function App() {
  return (
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
                  
                </Routes>
              </div>
            </main>

          </div>
    </BrowserRouter>
  );
}

export default App;
