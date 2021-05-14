import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
    afterEach(() => cleanup());
    it('renders a Search input', () => {
        const { asFragment } = render(<Search
            search='my_search_query'
            onChange={jest.fn()}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});
