import './article-list.js';

class MALItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set malSearch(malSearch) {
        this._malSearch = malSearch;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._malSearch.forEach(fetchMAL => {
            const itemMAL = document.createElement("article-list");
            itemMAL.article = fetchMAL;
            this.shadowDOM.appendChild(itemMAL);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             p {
                color: #f7f7f7;
                text-align: center;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
               }
        </style>`;
        this.shadowDOM.innerHTML += `<p>${message}</p>`;
    }
}

customElements.define("item-mal", MALItem);