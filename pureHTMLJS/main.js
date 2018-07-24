class MyFirstComponent extends HTMLElement {
    // remember to call super in constructor
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('Connected callback');
    }

    disconnectedCallback() {
        console.log('disconnected');
    }
}

/*
* Custom and polite anchor that asks before redirection that gets angry red after 3 times
*/
class CustomAnchor extends HTMLAnchorElement {

    constructor() {
        super();
        this.clicks = 0;
    }

    connectedCallback() {
        this.addEventListener('click', e => {
            e.preventDefault();
            if (confirm('Are you sure?')) {
                window.location.href = e.target.href; 
            } else {
                this.clicks += 1;
                if ( this.clicks >= 3) {
                    this.style.fontSize = '32px';
                    this.style.color = 'red';
                }
            }
        });
    }
}

window.customElements.define('my-first-component', MyFirstComponent);
window.customElements.define('custom-anchor', CustomAnchor, { extends: 'a'});