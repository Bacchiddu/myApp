import ItemListContainer from '../src/componentes/ItemListContainer/ItemListContainer';
import NavBar from '../src/componentes/NavBar'; 
import './styles.css';

function App() {
  return( 
    <div>
    <NavBar/>
    <ItemListContainer title="Bienvenido a mi pagina"/>
    </div>
)
} 

// volver a activar si saco el export default
export default App; 
