import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <section className='login'>
            <div className="container">
                <div className="login_content">
                    <div className="login_form">
                        <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
                        <form>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="password">Пароль</label>
                            <input type="password" id="password" name="password" required />
                            {!isLogin && (
                                <div>
                                    <label htmlFor="confirmPassword">Подтвердите пароль</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                                </div>
                            )}
                            <button type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
                        </form>
                        <p onClick={toggleForm}>
                            {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
