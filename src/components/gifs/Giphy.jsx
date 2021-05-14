import React from 'react';
import PropTypes from 'prop-types';
import styles from './Giphy.module.css';

const Giphy = ({ title, url, image }) => (
    <a className={styles.Giphy}
        href={url}>
        <figure>
            <img src={image} alt={title} />
            <figcaption>{title}</figcaption>
        </figure>
    </a>
);

Giphy.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Giphy;
