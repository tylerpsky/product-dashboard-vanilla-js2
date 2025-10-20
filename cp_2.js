function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
      .then(function (response) {
        return response.json();
      })
      .then(function (products) {
        console.log("Products fetched with .then():");
        products.forEach(function (item) {
          console.log(item.fields.name);
        });
      })
      .catch(function (error) {
        console.error("Fetch error (then):", error);
      });
}
  
async function fetchProductsAsync() {
    try {
      const response = await fetch("https://www.course-api.com/javascript-store-products");
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
}
  
function displayProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
  
    const firstFive = products.slice(0, 5);
  
    firstFive.forEach(function (product) {
      const { name, price, image } = product.fields;
      const imageUrl = image[0].url;
      const productCard = document.createElement("div");
      productCard.className = "product-card";
  
      productCard.innerHTML = `
        <img src="${imageUrl}" alt="${name}">
        <div class="product-info">
          <div class="product-name">${name}</div>
          <div class="product-price">$${(price / 100).toFixed(2)}</div>
        </div>
      `;
  
      container.appendChild(productCard);
    });
}
  
function handleError(error) {
    console.error("An error occurred:", error.message);
}
  
fetchProductsThen();
fetchProductsAsync();