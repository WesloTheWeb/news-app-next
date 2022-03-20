import React from 'react';
import classes from './NewsTag.module.scss';

const { container, GeneralTag, BusinessTag, EntertainmentTag, HealthTag, ScienceTag, SportsTag, TechnologyTag } = classes;

const NewsTag = ({ categories }) => {

    const determineTag = (tag) => {
        switch (tag) {
            case 'general':
                return <label className={[container, GeneralTag].join(' ')}>General</label>
            case 'business':
                return <label className={[container, BusinessTag].join(' ')}>Business</label>
            case 'entertainment':
                return <label className={[container, EntertainmentTag].join(' ')}>Entertainment</label>
            case 'health':
                return <label className={[container, HealthTag].join(' ')}>Health </label>
            case 'science':
                return <label className={[container, ScienceTag].join(' ')}>Science</label>
            case 'sports':
                return <label className={[container, SportsTag].join(' ')}>Sports</label>
            case 'technology':
                return <label className={[container, TechnologyTag].join(' ')}>Technology</label>
            default:
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
                )
        }
    };

    return (
        <div>
            {determineTag(categories)}
        </div>
    );
};

export default NewsTag;