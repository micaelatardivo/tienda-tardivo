
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <header> <NavBar /> </header>
          <ItemListContainer greeting="elegi la cantidad de tu producto" />
    </div>
  );
}

export default App;
