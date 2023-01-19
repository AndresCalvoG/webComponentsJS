class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h1>
        <slot name='title'></slot>
        </h1>
        <div>
        <p>
          <slot name='text'></slot>
        </p>
        </div>
        <slot></slot>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
    <style>
      :host{
        --primary-color: tomato;
        --secondary-color: salmon;
        --heading-primary: 35px;
        --heading-secondary: 20px;
        display: inline-block;
        width: 100%;
        miin-width: 300px;
        max-width: 450px;
      }
      section{
        background: var(--primary-color)
      }
      section div{
        background: var(--secondary-color)
      }
      section h1 {
        font-size: var(--heading-primary);
      }
      section p{
        font-size: var(--heading-secondary);
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
