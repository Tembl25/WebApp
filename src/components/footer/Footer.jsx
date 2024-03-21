import './footer.css';
import { FaTelegram, FaVk } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <h3>О нас</h3>
                        <p>Краткое описание KingFilms.</p>
                    </div>
                    <div className="footer-right">
                        <h3>Свяжитесь с нами</h3>
                        <p>Email: info@example.com</p>
                        <p>Телефон: +1234567890</p>
                        <div className="social-icons">
                            <a href="#"><FaTelegram /></a>
                            <a href="#"><FaVk /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 KingFilms. Все права защищены.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;