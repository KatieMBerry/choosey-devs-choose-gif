import React from 'react';
import PropTypes from 'prop-types';
import Giphy from './Giphy';
import styles from './GiphyList.css';

const GiphyList = ({ gifs }) => {
    const gifElements = gifs.map(gif => (
        <li key={gif.title}>
            <Giphy {...gif} />
        </li>
    ));

    return <ul className={styles.GiphyList}>
        {gifElements}
    </ul>;
};

GiphyList.propTypes = {
    gifs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        images: PropTypes.string.isRequired
    }))
};

export default GiphyList;
