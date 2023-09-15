import './header.css';

const Header = () => {
    return(
        <header className="header">
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="#" className="menu__link">Coffee house</a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">Our coffee</a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">For your pleasure</a>
                    </li>
                </ul>
            </nav>
            <div className="header__title title">
                <p>Our Coffee</p>
            </div>
        </header>
    )
}

export default Header;
