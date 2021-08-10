import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow p-2 mb-2 rounded'>
        <div className='container-fluid'>
            <Link to="/"><img src={logo} alt='Tap And Go' className='tag-logo' /></Link>
            <div className='collapse navbar-collapse ms-5' id="navbarNav">
                <ul className='navbar-nav ms-5'>
                    <li className='nav-item'>
                        <Link to='/map' className='nav-link'>Carte</Link>
                    </li>
                    <li className='nav-item ms-3'>
                        <Link to='/stationList' className='nav-link'>Liste stations</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;