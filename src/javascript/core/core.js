import '../customs/header-mal.js';
import '../customs/item-mal.js';
import '../customs/search-bar.js';
import MALFetch from '../fetch/mal-fetch.js';

const core = () => {
    const searchElement = document.querySelector("search-mal");
    const itemMAL = document.querySelector("item-mal");

    const onButtonSearchClicked = async () => {
        try {
            const result = await MALFetch.apiMAL(searchElement.value);
            renderResult(result);
        } catch (err) {
            fallbackResult(err)
        }
    };

    const renderResult = results => {
        itemMAL.malSearch = results;
    };

    const fallbackResult = err => {
        itemMAL.renderError(err);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default core;