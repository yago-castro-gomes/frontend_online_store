export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const dataReturn = await data.json();
  return dataReturn;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const data = await fetch(`https://api.mercadolibre.com/sites/${query}/search?category=${categoryId}`);
  const dataReturn = await data.json();
  return dataReturn;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
