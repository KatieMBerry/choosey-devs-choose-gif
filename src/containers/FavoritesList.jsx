import { request } from 'express';
import React, { Component } from 'react';

export default class FavoritesList extends Component {
    state = {
        loading: true,
        favorites: []
    }

    componentDidMount = async () => {
        await this.fetchFavorites()
            .then(favorites => this.setState({ favorites }))
            .then(() => this.setState({ loading: false }));
    };

    fetchFavorites = async () => {
        await this.setState({ loading: true });
        const response = await request.get()
    }
}
