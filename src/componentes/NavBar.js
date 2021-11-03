import CartWidget from '../componentes/CartWidget';
import './NavBar.css';
//import para hacer las rutas
import {Link} from 'react-router-dom'
/* import './styless.css'; */
 export default function NavBar() {
    return (
    
      <div className="NavBarCompleto organizado"> 
        <div className="NavBar">
            <ul >
                
                <li>
                    <Link to="/cards">Home</Link>
                </li>
                <li>
                    <Link to="/contacto">Redes</Link>
                </li>
                <li>
                    <a href="/">Nosotros</a>
                </li>
                <li>
                    <>
                   <CartWidget/>
                    </>
                </li>
            </ul>
        </div>
      </div>
    );
  } 
