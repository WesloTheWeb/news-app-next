import React from 'react';
import classes from './NewsCard.module.scss';
import Image from 'next/image';
import NewsTag from '../NewsTag/NewsTag';

const { newsContainer, newsDesc } = classes;

const NewsCard = ({ article, articleURL, image, description, tags }) => {
    return (
        <section className={newsContainer}>
            <a
                href={articleURL}
                rel="noreferrer"
                target="_blank"
            >
                <h3>{article}</h3>
            </a>
            <NewsTag categories={tags} />
            <div className={newsDesc}>
                <p>{description}</p>
                <a
                    href={articleURL}
                    rel="noreferrer"
                    target="_blank">
                    {
                        image ? <img src={image} alt="news article" width={170} height={130} /> :
                        <Image src="/placeholder-image.png" alt="image pending" width={170} height={130} />
                    }
                </a>
            </div>
        </section>
    );
};

export default NewsCard;