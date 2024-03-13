import bannerImg from './../../img/banner2.jpeg';
import './promo.css';

function Promo () {
    return (
        <section className='promo'>
            <div className="container">
                <div className="promo_content">
                    <div className="image_overlay">
                        <img src={bannerImg} alt="logo" className="banner_image" />
                        <div className="text_overlay">
                            <h2>Лучшие фильмы</h2>
                            <p>В одном месте</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promo;
