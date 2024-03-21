import React, { useState } from 'react';
import './filmsPage.css';

function FilmsPage() {
    const [filterValue, setFilterValue] = useState(''); // Изначальное значение фильтра

    // Обработчик изменения значения фильтра
    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    return (
        <section className='filmsPage'>
            <div className="container">
                <div className="header_row">
                    <div className="header_name">
                        <span>Фильмы</span>
                    </div>
                    <div className="header_filter">
                        <select value={filterValue} onChange={handleFilterChange}>
                            <option value="">Все</option>
                            <option value="action">Боевики</option>
                            <option value="comedy">Комедии</option>
                            <option value="drama">Драмы</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FilmsPage;
