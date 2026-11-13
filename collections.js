// =====================================
// NOSTRA COLLECTIONS PAGE
// Search, Filter and Sorting
// =====================================

document.addEventListener("DOMContentLoaded", function () {
  // =====================================
  // SELECT HTML ELEMENTS
  // =====================================

  var productGrid = document.getElementById("product-grid");

  var products = Array.from(productGrid.querySelectorAll(".product-card"));

  var searchInput = document.getElementById("product-search");

  var occasionFilters = document.querySelectorAll(".occasion-filter");

  var colorFilters = document.querySelectorAll(".color-filter");

  var categoryFilters = document.querySelectorAll('input[name="category"]');

  var priceFilter = document.getElementById("price-filter");

  var priceValue = document.getElementById("price-value");

  var sortProducts = document.getElementById("sort-products");

  var resultCount = document.getElementById("result-count");

  var emptyState = document.getElementById("empty-state");

  var clearFilters = document.getElementById("clear-filters");

  // =====================================
  // FILTER FUNCTION
  // =====================================

  function filterProducts() {
    // Search Value

    var search = searchInput.value.toLowerCase();

    // Price Value

    var maxPrice = Number(priceFilter.value);

    priceValue.textContent = "₹" + maxPrice.toLocaleString("en-IN");

    // Selected Category

    var category = document.querySelector(
      'input[name="category"]:checked',
    ).value;

    // Selected Occasions

    var occasions = [];

    occasionFilters.forEach(function (filter) {
      if (filter.checked) {
        occasions.push(filter.value);
      }
    });

    // Selected Colors

    var colors = [];

    colorFilters.forEach(function (filter) {
      if (filter.checked) {
        colors.push(filter.value);
      }
    });

    // Product Filtering

    var visibleProducts = [];

    products.forEach(function (product) {
      var name = product.dataset.name.toLowerCase();

      var productCategory = product.dataset.category;

      var productColor = product.dataset.color;

      var productOccasion = product.dataset.occasion;

      var productPrice = Number(product.dataset.price);

      // Search Condition

      var searchMatch = name.includes(search);

      // Category Condition

      var categoryMatch = category == "All" || category == productCategory;

      // Price Condition

      var priceMatch = productPrice <= maxPrice;

      // Occasion Condition

      var occasionMatch =
        occasions.length == 0 || occasions.includes(productOccasion);

      // Color Condition

      var colorMatch = colors.length == 0 || colors.includes(productColor);

      // Final Condition

      if (
        searchMatch &&
        categoryMatch &&
        priceMatch &&
        occasionMatch &&
        colorMatch
      ) {
        visibleProducts.push(product);
      }
    });

    // =====================================
    // SORT PRODUCTS
    // =====================================

    var sortValue = sortProducts.value;

    if (sortValue == "low") {
      visibleProducts.sort(function (a, b) {
        return Number(a.dataset.price) - Number(b.dataset.price);
      });
    } else if (sortValue == "high") {
      visibleProducts.sort(function (a, b) {
        return Number(b.dataset.price) - Number(a.dataset.price);
      });
    } else if (sortValue == "az") {
      visibleProducts.sort(function (a, b) {
        return a.dataset.name.localeCompare(b.dataset.name);
      });
    } else {
      visibleProducts.sort(function (a, b) {
        return products.indexOf(a) - products.indexOf(b);
      });
    }

    // =====================================
    // DISPLAY PRODUCTS
    // =====================================

    products.forEach(function (product) {
      product.hidden = true;
    });

    visibleProducts.forEach(function (product) {
      product.hidden = false;

      productGrid.appendChild(product);
    });

    // =====================================
    // PRODUCT COUNT
    // =====================================

    resultCount.textContent =
      visibleProducts.length +
      (visibleProducts.length == 1 ? " PIECE" : " PIECES");

    // =====================================
    // EMPTY MESSAGE
    // =====================================

    emptyState.hidden = visibleProducts.length != 0;
  }

  // =====================================
  // EVENT LISTENERS
  // =====================================

  // Search Event

  searchInput.addEventListener("input", function () {
    filterProducts();
  });

  // Occasion Event

  occasionFilters.forEach(function (filter) {
    filter.addEventListener("change", function () {
      filterProducts();
    });
  });

  // Color Event

  colorFilters.forEach(function (filter) {
    filter.addEventListener("change", function () {
      filterProducts();
    });
  });

  // Category Event

  categoryFilters.forEach(function (filter) {
    filter.addEventListener("change", function () {
      filterProducts();
    });
  });

  // Price Event

  priceFilter.addEventListener("input", function () {
    filterProducts();
  });

  // Sort Event

  sortProducts.addEventListener("change", function () {
    filterProducts();
  });

  // =====================================
  // CLEAR ALL FILTERS
  // =====================================

  clearFilters.addEventListener("click", function () {
    // Clear Search

    searchInput.value = "";

    // Reset Price

    priceFilter.value = 5000;

    // Reset Sort

    sortProducts.value = "featured";

    // Uncheck Occasions

    occasionFilters.forEach(function (filter) {
      filter.checked = false;
    });

    // Uncheck Colors

    colorFilters.forEach(function (filter) {
      filter.checked = false;
    });

    // Reset Category

    document.querySelector('input[name="category"][value="All"]').checked =
      true;

    // Update Products

    filterProducts();
  });

  // =====================================
  // INITIAL FUNCTION
  // =====================================

  filterProducts();
});

// Most Wanted - Favourite Heart

var wishButtons = document.querySelectorAll(".wish-button");

wishButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.innerHTML = "♥";
            button.setAttribute("aria-pressed", "true");
        } else {
            button.innerHTML = "♡";
            button.setAttribute("aria-pressed", "false");
        }

    });

});