const fetch = require("node-fetch");

export const searchGifs = (search = 'honey') => {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${search}&limit=25&offset=0&rating=pg&lang=en`)
        .then(res => res.json())
        .then(({ data }) => data.map(({ item }) => ({
            id: id,
            title: title,
            url: url,
            image: images
        })));
};
