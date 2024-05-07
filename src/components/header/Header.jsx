import logoImg from './../../img/crown-regular-48.png';
import avatarImg from './../../img/avatar.png';
import './header.css';
import { Link } from 'react-router-dom';

function Header () {

    return (
       <header className="header">
           <div className="container">
               <div className="header_row">
                    <div className="header_logo">
                        <img src={logoImg} alt="logo" />
                        <span>KingFilms</span>
                    </div>
                    <div className="header_nav">
                        <ul>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/filmsPage">Фильмы</Link></li>
                            <li><Link to="/news">Новости</Link></li>
                            <li><Link to="/about">О нас</Link></li>
                            <li><Link to="/cart">Корзина</Link></li>
                            <div className="header_avatar">
                                <li><Link to="/login"><img src={avatarImg} alt="avatar" /></Link></li>
                            </div>
                        </ul>
                    </div>
               </div>
           </div>
       </header>
    )
}

export default Header;