class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchKeyword").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

       .search {
        width: 100%;
        position: relative;
        display: flex;
      }
  
      .searchTerm {
        width: 100%;
        border: 3px solid #2B3252;
        border-right: none;
        padding: 5px;
        height: 20px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9DBFAF;
      }
  
      .searchTerm:focus {
        color: #2B3252;
      }
  
      .searchButton {
        width: 40px;
        height: 36px;
        border: 1px solid #2B3252;
        background: #2B3252;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
      }

      .wrap {
        position: sticky;
        width: 25%;
        margin: auto;
      }
      
    @media only screen and (max-device-width : 640px) {
      .search {
        width: 100%;
        position: relative;
        display: flex;
      }

      .searchTerm {
        width: 100%;
        border: 3px solid #2B3252;
        border-right: none;
        padding: 5px;
        height: 20px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9DBFAF;
      }

      .searchTerm:focus {
        color: #2B3252;
      }

      .searchButton {
        width: 40px;
        height: 36px;
        border: 1px solid #2B3252;
        background: #2B3252;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
      }

      .wrap {
        position: sticky;
        width: 75%;
        margin: auto;
      }
       </style>
       <br>
       <br>
       <div class="wrap">
       <div class="search">
         <input type="text" id="searchKeyword" class="searchTerm" placeholder="Search anime name">
         <button type="submit" id="searchButton" class="searchButton">
           <i class="fa fa-search"></i>
         </button>
       </div>
     </div>
       `;
    this.shadowDOM.querySelector("#searchButton").addEventListener("click", this._clickEvent);
  }

}

customElements.define("search-mal", SearchBar);