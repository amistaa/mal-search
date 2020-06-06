class ArticleList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set article(article) {
        this._article = article;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>

           .article-list {
               font-size: 20px;
               color: #f7f7f7;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
               padding: 20px;
               margin-left: 50px;
               margin-right: 50px;
               border-radius: 5px;
               margin-top: 20px;
            }
              
            .photos {
                width: 15%;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
              
            .article-info {
                padding: 24px;
            }
              
            .article-info > h2 {
                color: #1C90EC;
                text-align: center;
                font-size: 125%;
            }
              
            .article-info > p {              
                color: #f7f7f7;
                text-align: left;
                font-size: 95%;
            }

            .article-info > h5 {              
                color: #ee2b47;
                text-align: center;
                font-size: 95%;
            }

            @media only screen and (max-device-width : 640px) {
                .photos {
                    width: 100%;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
           </style>
           <div class="article-list">
           <img class="photos" src="${this._article.image_url}" alt="${this._article.title}">
           <div class="article-info">
               <h2>${this._article.title}</h2>
               <h4>Synopsis</h4>
               <p>${this._article.synopsis}</p>
               <h5 class="c">Episodes : ${this._article.episodes} &nbsp&nbsp Score : ${this._article.score} &nbsp&nbsp Type : ${this._article.type}</h5>
               </div>
           </div>`;
    }
}

customElements.define("article-list", ArticleList);