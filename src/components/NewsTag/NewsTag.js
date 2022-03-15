import React from 'react';
import classes from './NewsTag.module.scss';

const { container, GeneralTag, BusinessTag, EntertainmentTag, HealthTag, ScienceTag, SportsTag, TechnologyTag } = classes;

const NewsTag = ({ tags }) => {
    return (
        <>
            <label className={[container, GeneralTag].join(' ')}>General</label>
            <label className={[container, BusinessTag].join(' ')}>Business</label>
            <label className={[container, EntertainmentTag].join(' ')}>Entertainment</label>
            <label className={[container, HealthTag].join(' ')}>Health </label>
            <label className={[container, ScienceTag].join(' ')}>Science</label>
            <label className={[container, SportsTag].join(' ')}>Sports</label>
            <label className={[container, TechnologyTag].join(' ')}>Technology</label>
        </>
    );
};

export default NewsTag;