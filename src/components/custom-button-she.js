export class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["title", "paragraph", "img"];
  }
  attributeChangedCallback(attribute, oldVal, newVal) {
    if (attribute === "title") return this.title = newVal;
    if (attribute === "paragraph") return this.paragraph = newVal;
    if (attribute === "img") return this.img = newVal;
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
         <p>${this.paragraph}</p>
         <img src=${this.img} alt="Web Components"/>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
    body {
      margin: 0;
      font-size: 62.5%;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    section {
      width: 30%;
      height: 50%; 
      background-color: #fff; 
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 2rem;
      box-shadow: 1rem 1rem 1rem rgba(0,0,0,.2);
    }
    div {
      width: 90%;
    }
    img {
      max-width: 100%;
    }
    </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("my-element", myElement);