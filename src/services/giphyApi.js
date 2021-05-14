// const fetch = require("node-fetch");

export const searchGifs = (search = 'honey') => {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${search}&limit=16&offset=0&rating=pg&lang=en`)
        .then(res => res.json())
        .then(({ data }) => data.map(item => ({
            id: item.id,
            title: item.title,
            url: item.url,
            image: item.images.fixed_height.url
        })));
};
