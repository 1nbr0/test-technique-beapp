import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow p-2 mb-2 rounded'>
        <div className='container-fluid'>
            <a href="/"><img src={logo} alt='Tap And Go' className='tag-logo' /></a>
            <div className='collapse navbar-collapse' id="navbarNav">
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a href='/' className='nav-link'>Carte</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' className='nav-link'>Liste stations</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Banner;