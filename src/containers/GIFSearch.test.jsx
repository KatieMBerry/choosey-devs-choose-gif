import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import GIFSearch from './GIFSearch';

describe('GIFSearch container', () => {
    it('searches for gifs when a search term is typed', () => {
        render(<GIFSearch />);

        const searchInput = screen.getByPlaceholderText('Search here...');
        // fireEvent.input(searchInput, {
        //     target: {
        //         value: 'dogs'
        //     },
        // });
        user.type(searchInput, 'dogs');

        return waitFor(() => {
            expect(screen.getByTestId('gifs')).not.toBeEmptyDOMElement();
        });
    });
});
