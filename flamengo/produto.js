function obterIdProduto() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

async function detalharProduto() {
  const idProduto = obterIdProduto();
  console.log(idProduto);
  const baseUrl = "http://localhost:3008";
  
  const res = await fetch(`${baseUrl}/produtos/?id=${idProduto}`);
  const produtos = await res.json();

  const container = document.getElementById("produto_detalhes");
  container.innerHTML = ` 
    <div class="card" style="width: 18rem;">
        <img src="${produtos.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${produtos.name}</h5>
          <p> R$ ${produtos.price}</p>
          <a href="345-carrinho.html" class="btn btn-primary">adicione ao carrinho</a>
        </div>
      </div>
  `;

  document.getElementById('add-to-cart').addEventListener('click', () => {
    document.location.href = `carrinho.html?id=${idProduto}`;
  });
}
detalharProduto()