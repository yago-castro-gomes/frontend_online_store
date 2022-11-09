export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
}

export async function getProductsFromCategoryAndQuery($CATEGORY_ID, $QUERY) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${$CATEGORY_ID}&q=${$QUERY}`;
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
