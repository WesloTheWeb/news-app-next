import React from 'react';
import classes from './SearchBar.module.scss';

const { formContainer } = classes;

const SearchBar = ({ }) => {
    return (
        <form className={formContainer}>
            <input placeholder="Search article by keywords or categories" />
            <button>Search</button>
        </form>
    );
};

export default SearchBar;