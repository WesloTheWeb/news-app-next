import React from 'react';
import classes from './NewsCard.module.scss';
import Image from 'next/image';
import NewsTag from '../NewsTag/NewsTag';
import PlaceHolder from '../../../public/images/PH-150.png';

const { newsContainer, newsDesc } = classes;

const NewsCard = ({ image }) => {
    return (
        <section className={newsContainer}>
            <a href="#">
                <h3>Article Name</h3>
            </a>
            <NewsTag />
            <div className={newsDesc}>
                <p>Description</p>
                <a href="#">
                    <Image src={PlaceHolder} placeholder="blur" alt="Vercel Logo" width={112} height={112} />
                </a>
            </div>
        </section>
    );
};


export default NewsCard;