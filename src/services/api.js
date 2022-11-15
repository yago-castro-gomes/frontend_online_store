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

export function handleClick({ target }) {
  const bag = {
    name: target.title,
    image: target.name,
    price: target.id,
    // qtd: 1,
  };
  const emptyStorage = JSON.parse(localStorage.getItem('dataCart')) === null;
  if (emptyStorage) {
    localStorage.setItem('dataCart', JSON.stringify([bag]));
  } else {
    const data = JSON.parse(localStorage.getItem('dataCart'));
    // if(data.includes(bag)) {

    // }
    // data.qtd += 1;
    // console.log(bag);
    const dataProducts = [...data, bag];
    localStorage.setItem('dataCart', JSON.stringify(dataProducts));
  }
}
