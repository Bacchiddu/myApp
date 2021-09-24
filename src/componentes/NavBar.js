import './NavBar.css';
/* import './styless.css'; */
export default function NavBar() {
    return (
      <div className="NavBarCompleto">     
        <div className="NavBar">
            <ul>
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
                    <a href="#">Carrito</a>
                </li>
                
            </ul>
        </div>
      </div>
    );
  }