
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import ItemDetailContainer from './components/ItemDetailContainer'; 


function App() {
  return (
    <div>

      <header> 
        <NavBar /> 
      </header>
          
      <main >
        <div className="desktop-container">
          <ItemListContainer greeting="CUARTO SET" />
          <ItemDetailContainer />
        </div>
      </main>

    </div>
  );
}

export default App;
