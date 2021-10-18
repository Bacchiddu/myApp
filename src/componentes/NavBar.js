import CartWidget from '../componentes/CartWidget';
import './NavBar.css';
/* import './styless.css'; */
 export default function NavBar() {
    return (
    
      <div className="NavBarCompleto organizado"> 
        <div className="NavBar">
            <ul >
                
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Redes</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
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
