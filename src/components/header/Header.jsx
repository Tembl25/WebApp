import logoImg from './../../img/crown-regular-48.png';
import './header.css';
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
                            <li><a href="#">Главная</a></li>
                            <li><a href="#">Корзина</a></li>
                            <li><a href="#">Фильмы</a></li>
                            <li><a href="#">Сериалы</a></li>
                            <li><a href="#">Новости</a></li>
                            <li><a href="#">О нас</a></li>
                        </ul>
                    </div>
               </div>
           </div>
       </header>
    )
}

export default Header;