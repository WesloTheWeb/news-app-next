import React from 'react';
import classes from './CategoryBar.module.scss';
import NewsTag from '../../components/NewsTag/NewsTag';

const { categoryBarContainer } = classes;

const CategoryBar = ({ }) => {
    return (
        <section className={categoryBarContainer}>
            <NewsTag />
        </section>
    );
};

export default CategoryBar;