import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav> 
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/vagas">Vagas</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        );
    }

    export default Navbar;