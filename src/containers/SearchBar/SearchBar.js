import React from 'react';
import classes from './SearchBar.module.css';

const { formContainer, labelAlign } = classes;

const SearchBar = ({ }) => {
    return (
        <form className={formContainer}>
            <input placeholder="Search article by words" />
        </form>
    );
};


export default SearchBar;