import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Giphy from './Giphy';

describe('Giphy component', () => {
    afterEach(() => cleanup());
    it('renders a single GIF', () => {
        const { asFragment } = render(<Giphy
            title='winnie the pooh dogs GIF'
            url='https://giphy.com/gifs/dogs-honey-winnie-the-pooh-3ohc13lGnOGpMHn7zO'
            images='https://media1.giphy.com/media/3ohc13lGnOGpMHn7zO/giphy-downsized-medium.gif?cid=697f7defd7fyrfz51nirurnkx3ydqt7h7y6l42ymo9ie2ksx&rid=giphy-downsized-medium.gif&ct=g'
        />);
        expect(asFragment()).toMatchSnapshot();
    })
})
