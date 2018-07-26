class RwRandomQuote extends HTMLElement {
    constructor() {
        super();
        this._$quote = '';
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .dj-container {
                    width: 500px;
                    margin: auto;
                    border: dotted 1px #999;
                    padding: 20px;
                }

                .dj-container h1 {
                    font-size: 20px;
                    margin: 0;
                }
            </style>
            <div class="dj-container">
                <h1>Random quote:</h1>
                <p>"<span id="quote"></span>"</p>
            </div>
        `;

        this._$quote = this.querySelector('#quote');
        this._setInterval(this.getAttribute('interval'));
        this._render();
    }

    _setInterval(milliseconds) {
        if (this._interval !== null) {
            clearInterval(this._interval);
        }

        if (milliseconds > 0) {
            this._interval = setInterval(() => this._render(), milliseconds);
        }
    }

    static get observedAttributes() {
        return ['interval'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this._setInterval(newValue);
    }

    _render() {
        fetch('https://cors.io/?http://quotesondesign.com/wp-json/posts').
        then(r => r.json()).
        then(j => {
            this._$quote.innerHTML = j[0].content;
            this.dispatchEvent(new CustomEvent("quoteChanged"));
        });
    }

    disconnectedCallback() {
        clearInterval(this._interval);
    }
}

window.customElements.define('dj-random-quote', RwRandomQuote);