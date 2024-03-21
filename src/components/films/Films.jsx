import './films.css';

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
            image: f1,
            price: 519.99,
        },
        {
            id: 2,
            name: 'Побег из Шоушенка',
            image: f2,
            price: 629.99,
        },
        {
            id: 3,
            name: 'Зеленая миля',
            image: f3,
            price: 739.99,
        },
        {
            id: 4,
            name: 'Титаник',
            image: f4,
            price: 549.99,
        },
        {
            id: 5,
            name: 'Интерстеллар',
            image: f5,
            price: 559.99,
        }
    ];

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
                            <p>{product.description}</p>
                            <p>Цена: ₽{product.price}</p>
                            <button>Купить</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Films;