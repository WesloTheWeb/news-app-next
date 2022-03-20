import React from 'react';
import classes from './NewsCard.module.scss';
import Image from 'next/image';
import NewsTag from '../NewsTag/NewsTag';
import PlaceHolder from '../../../public/images/news-placeholder.png';
// import { newsPlaceholder } from '../../../public/images/index';

const { newsContainer, newsDesc } = classes;

const NewsCard = ({ article, image, description }) => {
    return (
        <section className={newsContainer}>
            <a href="#">
                <h3>{article}</h3>
            </a>
            <NewsTag />
            <div className={newsDesc}>
                <p>{description}</p>
                <a href="#">
                    {
                        image ? <img src={image} alt="news article" width={170} height={130} /> : 
                        <img src={PlaceHolder} alt="image pending" width={170} height={130} />
                    }
                </a>
            </div>
        </section>
    );
};

export default NewsCard;