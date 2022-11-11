export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
}

export async function getProductsFromCategoryAndQuery($CATEGORY_ID, $QUERY) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${$CATEGORY_ID}&q=${$QUERY}`;
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
}

export async function getProductById(id) {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
}
