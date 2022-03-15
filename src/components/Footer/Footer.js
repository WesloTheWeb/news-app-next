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
                {/* <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span> */}
            </a>
        </footer>
    );
};

export default Footer;