class HeaderMAL extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <h3>MyAnimeList Search</h3>`;
    }
}

customElements.define("header-mal", HeaderMAL);