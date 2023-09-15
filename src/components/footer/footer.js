import './footer.css';
import coffee from '../../resources/img/about/coffee-beans-black.svg';
const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__menu menu">
                <ul className="menu__list menu__list_black">
                    <li className="menu__item">
                        <a href="" className="menu__link menu__link_black">Coffee house</a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link menu__link_black">Our coffee</a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link menu__link_black">For your pleasure</a>
                    </li>
                </ul>
            </nav>
            <div className="devider__footer">
                <div className="devider">
                    <div className="devider__img">
                        <img src={coffee} alt="coffee"/>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
