import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar'; 
// react router dom
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './styles.css';
import ItemDetail from '../src/componentes/ItemDetailContainer/ItemDetail'
import ItemDetailContainer from '../src/componentes/ItemDetailContainer/ItemDetail';
import Home from './componentes/Views/Home';
import Contacto from './componentes/Views/Contacto';
import CharacterList from './componentes/Views/Card';




function App() {
  return( 
    <Router>
      <div>

        <NavBar/>
        {/* <ItemListContainer title="Bienvenido a mi pagina"/> */}

        {/* trae los datos */}
        <ItemDetailContainer/>
        
        <Switch>
          {/* trae las cards */}
        <Route path = '/cards' component={ItemListContainer}/>
        <Route path = '/contacto' component={Contacto}/>
        <Route path = '/' exact component={Home}/>
        <Route path = '/item/:id' component={ItemDetailContainer} />
        <Route path = '/character' component= {CharacterList}/>
        </Switch>
      </div>
    </Router>
   
)
} 

// volver a activar si saco el export default
export default App; 
