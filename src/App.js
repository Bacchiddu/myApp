import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar'; 
import './styles.css'
// react router dom
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetail from '../src/componentes/ItemDetailContainer/ItemDetail'
import ItemDetailContainer from '../src/componentes/ItemDetailContainer/ItemDetail';
import Home from './componentes/Views/Home';
import Contacto from './componentes/Views/Contacto';
import CharacterDetail from './componentes/Views/CharacterDetail';





function App() {
  return( 
    <Router>
      <div>

        <NavBar/>
        {/* <ItemListContainer title="Bienvenido a mi pagina"/> */}

        {/* trae los datos */}
        {/* <ItemDetailContainer/> */}
        
        <Switch>
          {/* trae las cards */}
        <Route path = '/cards' exact component={ItemListContainer}/>
        <Route path = '/contacto' exact component={Contacto}/>
        <Route path = '/' exact component={Home}/>
        <Route path = '/cards/:id' exact component={CharacterDetail}/>
       {/*  <Route path = '/item/:id' exact component={ItemDetailContainer} /> */}
       {/*  <Route path = '/character' component= {CharacterList}/> */}
        </Switch>
      </div>
    </Router>
   
)
} 

// volver a activar si saco el export default
export default App; 
