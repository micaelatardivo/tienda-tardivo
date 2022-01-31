
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <header> <NavBar /> </header>
          <ItemListContainer greeting="PRIMER TEXTO" />
          <ItemListContainer greeting="SEGUNDO TEXTO" />
          <ItemListContainer greeting="TERCER TEXTO" />
    </div>
  );
}

export default App;
