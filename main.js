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
    clicks = 0;

    constructor() {
        super();
    }

    connectedCallback() {
        this.addEventListener('click', e => {
            e.preventDefault();
            if (confirm('Are you sure?')) {
                window.location.href = e.target.href; 
            } else {
                this.clicks += 1;
            }
        });
    }
}

window.customElements.define('my-first-component', MyFirstComponent);
window.customElements.define('custom-anchor', CustomAnchor, { extends: 'a'});