// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import FilmsPage from "./components/filmsPage/FilmsPage";
import Footer from "./components/footer/Footer";
import Films from "./components/films/Films";
import Login from "./components/login/Login";
import News from "./components/news/News";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (film) => {
        setCart([...cart, film]);
    };

    const removeFromCart = (filmToRemove) => {
        const updatedCart = cart.filter(item => item !== filmToRemove);
        setCart(updatedCart);
    };

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/filmsPage" element={<FilmsPage addToCart={addToCart} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
                    <Route element={<Outlet />}>
                        <Route path="/" element={<>
                            <Promo />
                            <Brands />
                            <Films />
                        </>} />
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
