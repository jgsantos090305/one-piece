class Componente extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const div = document.createElement('div');  
    div.className = "card mb-3 mt-3";
    div.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${this.getAttribute("image")}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.getAttribute("name")}</h5>
          <p> R$ ${this.getAttribute("price")}</p>
          <a href="carrinho.html" class="btn btn-primary">adicione ao carrinho</a>
          <a href="produto.html?id=${this.getAttribute('id')}"> veja mais </a>
        </div>
      </div>
    `;
    this.appendChild(div);
  }
}
customElements.define("produto-componente", Componente);