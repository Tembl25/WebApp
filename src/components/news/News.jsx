import './news.css';

import news1 from './../../img/news.jpeg'

const newsData = [
    {
        id: 1,
        title: "Заголовок новости 1",
        content: "Содержание новости 1",
        date: "01.04.2024",
        imageUrl: news1
    },
    {
        id: 2,
        title: "Заголовок новости 2",
        content: "Содержание новости 2",
        date: "02.04.2024",
        imageUrl: news1
    },
    {
        id: 3,
        title: "Заголовок новости 3",
        content: "Содержание новости 3",
        date: "03.04.2024",
        imageUrl: news1
    },
    {
        id: 4,
        title: "Заголовок новости 4",
        content: "Содержание новости 4",
        date: "04.04.2024",
        imageUrl: news1
    },
    {
        id: 5,
        title: "Заголовок новости 5",
        content: "Содержание новости 5",
        date: "05.04.2024",
        imageUrl: news1
    },
    {
        id: 6,
        title: "Заголовок новости 6",
        content: "Содержание новости 6",
        date: "06.04.2024",
        imageUrl: news1
    }
];

const News = () => {
    return (
        <section className='news'>
            <div className="container">
                <h2 className="news_title">Новости</h2>
                <div className="news_list">
                    {newsData.map(news => (
                        <div key={news.id} className="news_item">
                            <img src={news.imageUrl} alt={news.title} className="news_image" />
                            <h3 className="news_item_title">{news.title}</h3>
                            <p className="news_item_content">{news.content}</p>
                            <span className="news_item_date">{news.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default News;
