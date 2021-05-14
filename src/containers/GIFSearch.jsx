import React, { Component } from 'react';
import Search from '../components/search/Search';
import GiphyList from '../components/gifs/GiphyList';

export default class GIFSearch extends Component {
    state = {
        search: '',
        gifs: []
    };

    handleSearch = ({ target }) => {
        this.setState({ search: target.value });
    };

    render() {
        const { search, gifs } = this.state;
        return (
            <>
                <Search
                    search={search}
                    onChange={this.handleSearch} />
                <GiphyList gifs={gifs} />
            </>
        )
    }
}
