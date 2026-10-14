const productGrid = document.querySelector("#product-grid");
const statusMessage = document.querySelector("#status");
const errorMessage = document.querySelector("#error-message");
const productsUrl = "https://fakestoreapi.com/products/";

function shorten(text, limit) {
  return text.length > limit
    ? `${text.slice(0, limit - 1).trimEnd()}…`
    : text;
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const imageArea = document.createElement("div");
  imageArea.className = "product-image-area";

  const image = document.createElement("img");
  image.className = "product-image";
  image.src = product.image;
  image.alt = product.title;
  image.loading = "lazy";
  imageArea.append(image);

  const category = document.createElement("p");
  category.className = "product-category";
  category.textContent = product.category;

  const title = document.createElement("h2");
  title.className = "product-title";
  title.textContent = shorten(product.title, 60);

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = shorten(product.description, 120);

  card.append(imageArea, category, title, description);
  return card;
}

fetch(productsUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  })
  .then((products) => {
    products.forEach((product) => {
      productGrid.append(createProductCard(product));
    });
    statusMessage.hidden = true;
  })
  .catch((error) => {
    statusMessage.hidden = true;
    errorMessage.textContent = `Unable to load products: ${error.message}`;
    errorMessage.hidden = false;
  })
  .finally(() => {
    console.log("API called");
  });
