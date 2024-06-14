import logo from '../assets/logo.png';
import '../style/components/header.css';
import '../style/assets/font.css';



function Header() {
      
    return (
        <div className='header_wrapper'>
            <img className='header_logo' src={ logo } alt="" />
            <section className='nav_wrapper'>
                <nav className='navbar'>
                    <a className='accueil nav_link' href="#">
                        Accueil
                    </a>
                    <a className='profil nav_link' href='#'>
                        Profil
                    </a>
                    <a className='reglages nav_link' href="#">
                        Réglages
                    </a>
                    <a className='communauté nav_link' href="#">
                        Communauté
                    </a>
                </nav>
            </section>
        </div>
    )
}

export default Header