import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './filmsPage.css';

import f1 from './../../img/films/forest.jpg';
import f2 from './../../img/films/escape.jpeg';
import f3 from './../../img/films/mile.jpeg';
import f4 from './../../img/films/titanic.jpeg';
import f5 from './../../img/films/int.jpg';
import f6 from './../../img/films/botan.jpeg';
import f7 from './../../img/films/home-alone.jpg';
import f8 from './../../img/films/father.jpeg';
import f9 from './../../img/films/JufbPs2PCRo.jpg';
import f10 from './../../img/films/pirates.jpeg';
import f11 from './../../img/films/stalonne.jpeg';
import f12 from './../../img/films/typoi.jpeg';
import f13 from './../../img/films/truman.jpeg';
import f14 from './../../img/films/ventura.jpeg';
import f15 from './../../img/films/izgoi.jpeg';

function FilmsPage({ addToCart }) {
    const [filterValue, setFilterValue] = useState('');
    const [sortRating, setSortRating] = useState('');
    const [sortPrice, setSortPrice] = useState('');
    const [cart, setCart] = useState([]);

    const films = [
        { id: 1, title: 'Титаник', genre: 'Драма', image: f4, price: 549.99, rating: 4.0 },
        { id: 2, title: 'Пираты Карибского моря', genre: 'Боевик', image: f10, price: 629.99, rating: 4.5 },
        { id: 3, title: 'Храброе сердце', genre: 'Боевик', image: f9, price: 739.99, rating: 4.8 },
        { id: 4, title: 'Крестный отец', genre: 'Боевик', image: f8, price: 519.99, rating: 5 },
        { id: 5, title: 'Форрест Гамп', genre: 'Драма', image: f1, price: 559.99, rating: 4.2 },
        { id: 6, title: 'Один дома', genre: 'Комедия', image: f7, price: 349.99, rating: 5 },
        { id: 7, title: 'Мачо и ботан', genre: 'Комедия', image: f6, price: 319.99, rating: 3 },
        { id: 8, title: 'Интерстеллар', genre: 'Драма', image: f5, price: 559.99, rating: 5 },
        { id: 9, title: 'Зеленая миля', genre: 'Драма', image: f3, price: 739.99, rating: 4.8 },
        { id: 10, title: 'Побег из Шоушенка', genre: 'Боевик', image: f2, price: 519.99, rating: 5 },
        { id: 11, title: 'Неудержимые', genre: 'Боевик', image: f11, price: 219.99, rating: 3 },
        { id: 12, title: 'Тупой и еще тупее', genre: 'Комедия', image: f12, price: 549.99, rating: 4.0 },
        { id: 13, title: 'Эйс Вентура', genre: 'Комедия', image: f14, price: 549.99, rating: 4.0 },
        { id: 14, title: 'Шоу Трумана', genre: 'Комедия', image: f13, price: 549.99, rating: 5.0 },
        { id: 15, title: 'Изгой', genre: 'Драма', image: f15, price: 549.99, rating: 4.0 }
    ];

    const filteredFilms = films.filter(film => {
        if (!filterValue || filterValue === "Все") return true;
        return film.genre === filterValue;
    }).sort((a, b) => {
        if (sortRating === 'ascending') return a.rating - b.rating;
        if (sortRating === 'descending') return b.rating - a.rating;
        if (sortPrice === 'ascending') return a.price - b.price;
        if (sortPrice === 'descending') return b.price - a.price;
        return 0;
    });

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleSortRatingChange = (event) => {
        setSortRating(event.target.value);
    };

    const handleSortPriceChange = (event) => {
        setSortPrice(event.target.value);
    };

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

    const handleAddToCart = (film) => {
        addToCart(film);
    };

    return (
        <section className='filmsPage'>
            <div className="container">
                <div className="header_row">
                    <div className="header_name">
                        <span>Фильмы</span>
                    </div>
                    <div className="header_sort">
                        <select value={sortRating} onChange={handleSortRatingChange}>
                            <option value="">Сортировать по рейтингу</option>
                            <option value="ascending">По возрастанию</option>
                            <option value="descending">По убыванию</option>
                        </select>
                        <select value={sortPrice} onChange={handleSortPriceChange}>
                            <option value="">Сортировать по цене</option>
                            <option value="ascending">По возрастанию</option>
                            <option value="descending">По убыванию</option>
                        </select>
                    </div>
                    <div className="header_filter">
                        <select value={filterValue} onChange={handleFilterChange}>
                            <option value="">Жанр</option>
                            <option value="Боевик">Боевики</option>
                            <option value="Комедия">Комедии</option>
                            <option value="Драма">Драмы</option>
                        </select>
                    </div>
                </div>
                <div className="film-list">
                    {filteredFilms.map(film => (
                        <div className="film-card" key={film.id}>
                            <img src={film.image} alt={film.title} />
                            <h2>{film.title}</h2>
                            <div className="rating">{renderStars(film.rating)}</div>
                            <span className="film-genre">Жанр: {film.genre}</span>
                            <span>Цена: ₽{film.price}</span>
                            <button onClick={() => handleAddToCart(film)}>Добавить в корзину</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FilmsPage;