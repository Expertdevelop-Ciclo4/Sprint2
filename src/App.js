import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lista from "./componentes/ListaProductos";
import Modificar from "./componentes/Modificar"
import Ventas from "./componentes/Ventas"
import Carrito from "./componentes/Carrito"
import "./styles/Navbar.css"
import Logo from "./pcgamer2.png";
import ModificarProduct from "./componentes/Modificarproduct";
import AdministracionProductos from "./componentes/AdministracionProductos";


function App() {
  return (
    <Router>
      <div class="general">
      <img src={Logo} alt=""/>
      <hr/>
      <nav>
        <div >
        <ul >
          <li className="navbarpri">
            <Link class="buttonul" to="/lista">Lista productos</Link>
          </li>
          <li className="navbarpri">
            <Link class="buttonul" to="/modificar">Modificar productos</Link>
          </li>
          <li className="navbarpri">
            <Link class="buttonul" to="/ventas">Lista ventas</Link>
          </li>
          <li className="navbarpri">
            <Link class="buttonul" to="/carrito">Carrito</Link>
          </li>
          <li className="navbarpri">
            <Link class="buttonul" to="/administracion">Administracion de productos</Link>
          </li>
        </ul>
        </div>
      </nav>
      <Switch>
        
        <Route exact path="/modificar">
            <Modificar></Modificar>
            <ModificarProduct/>
        </Route>
        <Route exact path="/ventas">
            <Ventas></Ventas>
        </Route>
        <Route exact path="/carrito">
            <Carrito></Carrito>
        </Route>
        <Route exact path="/lista">
            <Lista></Lista>
        </Route>
        <Route exact path="/administracion">
            <AdministracionProductos></AdministracionProductos>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
