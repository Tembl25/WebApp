import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './cart.css';

function Cart({ cart, removeFromCart }) {
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
        <div className="cart">
            <div className="container">
                <div className="header_name">
                    <span>Корзина</span>
                </div>
                {cart.length === 0 ? (
                    <div className="cart_empty">
                        <p>Корзина пуста</p>
                    </div>
                ) : (
                    <>
                        <ul className="cart-list">
                            {cart.map(item => (
                                <li key={item.id} className="cart-item">
                                    <div className="item-details">
                                        <img src={item.image} alt={item.title} />
                                        <div>
                                            <h2 className="item-name">{item.title}</h2>
                                            <p>Цена: ₽{item.price}</p>
                                            <span className="film-genre">Жанр: {item.genre}</span>
                                            <div className="item-rating">
                                                <div className="rating">{renderStars(item.rating)}</div>
                                            </div>
                                            <button onClick={() => removeFromCart(item)}>Удалить из корзины</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="checkout-button" onClick={() => console.log("Order placed!")}>
                            Оформить заказ
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
