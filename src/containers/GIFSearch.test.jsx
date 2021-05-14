import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import user from '@testing-library/user-event';
import giphyApiResponse from '../fixtures/giphy.json';
import { MemoryRouter } from 'react-router-dom';
import GIFSearch from './GIFSearch';

const server = setupServer(
    rest.get('https://api.giphy.com/v1/gifs/search?', (req, res, ctx) => {
        return res(ctx.json(giphyApiResponse));
    })
);

describe('GIFSearch container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('searches for gifs when a search term is typed and displays those gifs', () => {
        render(
            <MemoryRouter>
                <GIFSearch />
            </MemoryRouter>
        );

        screen.getByAltText('loading');

        const searchInput = screen.getByPlaceholderText('Search here...');
        // fireEvent.input(searchInput, {
        //     target: {
        //         value: 'dogs'
        //     },
        // });
        user.type(searchInput, 'dogs');

        const listOfGifs = await screen.findByTestId('gifs');

        return waitFor(() => {
            expect(listOfGifs).not.toBeEmptyDOMElement();
        });
    });
});
