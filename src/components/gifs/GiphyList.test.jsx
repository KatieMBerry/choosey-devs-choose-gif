import React from 'react';
import { render, cleanup } from '@testing-library/react';
import GiphyList from './GiphyList';

describe('GiphyList component', () => {
    afterEach(() => cleanup());
    it('renders a list of GIFs', () => {
        const { asFragment } = render(<GiphyList
            gifs={[]}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});
