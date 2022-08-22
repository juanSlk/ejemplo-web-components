class customButton extends HTMLElement {
    constructor () {
        super()
    }
    connectedCallback () { 
        this.innerHTML = `
        
        <button type="button">¡Click Me!</button>

        <style>    
            button {
                color: #0099CC;
                background: transparent;
                border-radius: 6px;
                border: none;
                padding: 16px 32px;
                text-align: center;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                -webkit-transition-duration: 0.4s; /* Safari */
                transition-duration: 0.4s;
                cursor: pointer;
                text-decoration: none;
                text-transform: uppercase;
            }
            button:hover {
                background-color: #F0F0F0;
                color: blue;
           }
        </style>
        `
    }
}   
customElements.define('custom-button', customButton)