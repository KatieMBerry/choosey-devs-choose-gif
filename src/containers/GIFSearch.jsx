import React, { Component } from 'react';
import Search from '../components/search/Search';
import GiphyList from '../components/gifs/GiphyList';

export default class GIFSearch extends Component {
    render() {
        return (
            <>
                <Search />
                <GiphyList />
            </>
        )
    }
}
