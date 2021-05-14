import React, { Component } from 'react';
import Search from '../components/search/Search';
import GiphyList from '../components/gifs/GiphyList';
import { searchGifs } from '../services/giphyApi';


export default class GIFSearch extends Component {
    state = {
        search: '',
        loading: true,
        gifs: []
    }

    componentDidMount() {
        searchGifs()
            .then(gifs => this.setState({ gifs }))
            .then(() => this.setState({ loading: false }));
    };

    handleSearch = async ({ target }) => {
        await this.setState({ search: target.value }, () => {
            searchGifs(target.value)
                .then(gifs => this.setState({ gifs, loading: false }));
        });
    };

    render() {
        const { search, loading, gifs } = this.state;

        return (
            <>
                <Search
                    search={search}
                    onChange={this.handleSearch} />
                {!loading ? <GiphyList gifs={gifs} />
                    : <img src="http://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif" alt="loading" />}
            </>
        )
    }
}
