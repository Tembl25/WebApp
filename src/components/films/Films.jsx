import './films.css'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import f1 from './../../img/films/forest.jpg'
import f2 from './../../img/films/escape.jpeg'
import f3 from './../../img/films/mile.jpeg'
import f4 from './../../img/films/titanic.jpeg'
import f5 from './../../img/films/int.jpg'

const Films = () => {
    const products = [
        {
            id: 1,
            name: 'Форрест Гамп',
            genre: 'Драма',
            image: f1,
            rating: 5,
        },
        {
            id: 2,
            name: 'Побег из Шоушенка',
            genre: 'Драма',
            image: f2,
            rating: 5,
        },
        {
            id: 3,
            name: 'Зеленая миля',
            genre: 'Драма',
            image: f3,
            rating: 5,
        },
        {
            id: 4,
            name: 'Титаник',
            genre: 'Драма',
            image: f4,
            rating: 4.5,
        },
        {
            id: 5,
            name: 'Интерстеллар',
            genre: 'Драма',
            image: f5,
            rating: 5,
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating - filledStars >= 0.5;

        for (let i = 0; i < filledStars; i++) {
            stars.push(<FaStar key={i} />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key={stars.length} />);
        }

        return stars;
    };

    return (
        <section className='films'>
            <div className="container">
                <div className="films_title">
                    Мировые фильмы
                </div>
                <div className="product-list">
                    {products.map(product => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>Жанр: {product.genre}</p>
                            <div className="rating">{renderStars(product.rating)}</div>
                            <p>Оценка: {product.rating}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Films;