import React from 'react';
import PropTypes from 'prop-types';
import styles from './Giphy.css';

const Giphy = ({ title, url, images }) => (
    <a className={styles.Giphy} href={url}>
        <figure>
            <img src={images} alt={title} />
            <figcaption>{title}</figcaption>
        </figure>
    </a>
);

Giphy.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
};

export default Giphy;
