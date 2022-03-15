import React from 'react';

const Footer = (props) => {
    return (
        <footer className={['centerText'].join('')}>
            Powered by {' '}
            <a
                href="https://mediastack.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Mediastack API
            </a>
        </footer>
    );
};

export default Footer;