const products = [
  {
    id: "rose",
    name: "رز سلطنتی",
    category: "زنانه",
    price: "۱,۸۵۰,۰۰۰ تومان",
    short: "عطری لطیف با رایحه گل رز و وانیل",
    description:
      "رز سلطنتی عطری لطیف و شیک برای افرادی است که رایحه‌های گل‌دار و شیرین را دوست دارند. ترکیب گل رز، وانیل و مشک باعث شده این عطر برای مهمانی‌ها و استفاده روزانه مناسب باشد.",
    notes: ["گل رز", "وانیل", "مشک", "رایحه شیرین"],
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=85"
    ]
  },

  {
    id: "black",
    name: "بلک وود",
    category: "مردانه",
    price: "۲,۲۵۰,۰۰۰ تومان",
    short: "رایحه‌ای قدرتمند از چوب و ادویه‌های شرقی",
    description:
      "بلک وود عطری عمیق و قدرتمند با رایحه چوب، ادویه و عنبر است. این محصول انتخابی عالی برای استفاده در شب و موقعیت‌های رسمی محسوب می‌شود.",
    notes: ["چوب صندل", "عنبر", "ادویه", "رایحه گرم"],
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=900&q=85"
    ]
  },

  {
    id: "love",
    name: "لاو میست",
    category: "زنانه",
    price: "۱,۶۹۰,۰۰۰ تومان",
    short: "ترکیبی شیرین و جذاب از یاس و مشک",
    description:
      "لاو میست رایحه‌ای لطیف، جوان‌پسند و جذاب دارد. ترکیب یاس، مشک سفید و کمی مرکبات، رایحه‌ای ماندگار و دلنشین ایجاد کرده است.",
    notes: ["یاس", "مشک سفید", "مرکبات", "رایحه ملایم"],
    images: [
      "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=85"
    ]
  },

  {
    id: "white",
    name: "وایت لدر",
    category: "مردانه",
    price: "۱,۹۹۰,۰۰۰ تومان",
    short: "رایحه‌ای خنک و رسمی برای استفاده روزانه",
    description:
      "وایت لدر عطری خنک و تمیز با رایحه مرکبات و چرم است. این عطر برای محل کار، استفاده روزانه و فصل‌های گرم سال انتخاب مناسبی است.",
    notes: ["مرکبات", "چرم", "رایحه خنک", "روزانه"],
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85"
    ]
  },

  {
    id: "oriental",
    name: "اورینتال",
    category: "یونیسکس",
    price: "۲,۴۵۰,۰۰۰ تومان",
    short: "عطری گرم با رایحه عنبر و چوب صندل",
    description:
      "اورینتال یک عطر یونیسکس و گرم است که برای خانم‌ها و آقایان قابل استفاده است. رایحه عنبر، دارچین و چوب صندل شخصیت خاصی به این محصول می‌دهد.",
    notes: ["عنبر", "دارچین", "چوب صندل", "یونیسکس"],
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=900&q=85"
    ]
  },

  {
    id: "fresh",
    name: "فرش لایف",
    category: "یونیسکس",
    price: "۱,۵۵۰,۰۰۰ تومان",
    short: "رایحه‌ای مرکباتی و خنک برای روزهای پرانرژی",
    description:
      "فرش لایف عطری پرانرژی با رایحه لیمو، پرتقال و گیاهان سبز است. این عطر برای استفاده روزانه و روزهای گرم بسیار مناسب است.",
    notes: ["لیمو", "پرتقال", "گیاهان سبز", "رایحه خنک"],
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=85"
    ]
  }
];

function getCart() {
  return JSON.parse(localStorage.getItem("perfumeCart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("perfumeCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().length;

  document.querySelectorAll(".cart-count").forEach(element => {
    element.textContent = count.toLocaleString("fa-IR");
  });
}

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const cart = getCart();
  cart.push(id);
  saveCart(cart);

  alert("«" + product.name + "» به سبد خرید اضافه شد ✅");
}

function removeFromCart(id) {
  const cart = getCart();
  const index = cart.indexOf(id);

  if (index !== -1) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  loadCart();
}

function productCard(product) {
  return `
    <div class="product-card">
      <a href="product.html#${product.id}">
        <div class="product-image">
          <img src="${product.images[0]}" alt="${product.name}">
        </div>
      </a>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.short}</p>

        <div class="product-bottom">
          <span class="price">${product.price}</span>

          <div class="card-buttons">
            <a class="detail-button" href="product.html#${product.id}">
              جزئیات
            </a>

            <button class="add-button"
                    onclick="addToCart('${product.id}')">
              افزودن
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function loadProducts() {
  const productList =
    document.getElementById("productList") ||
    document.getElementById("featuredList");

  if (!productList) return;

  productList.innerHTML = products.map(productCard).join("");

  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");

  if (searchInput && categorySelect) {
    searchInput.addEventListener("input", filterProducts);
    categorySelect.addEventListener("change", filterProducts);
  }
}

function filterProducts() {
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const productList = document.getElementById("productList");

  if (!searchInput || !categorySelect || !productList) return;

  const searchText = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  const filtered = products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchText);
    const categoryMatch =
      category === "all" || product.category === category;

    return nameMatch && categoryMatch;
  });

  if (filtered.length === 0) {
    productList.innerHTML =
      `<div class="empty">محصولی با این مشخصات پیدا نشد.</div>`;
  } else {
    productList.innerHTML = filtered.map(productCard).join("");
  }
}

function loadProductDetails() {
  const detailPage = document.getElementById("detailPage");

  if (!detailPage) return;

  const id = window.location.hash.replace("#", "") || "rose";
  const product = products.find(item => item.id === id);

  if (!product) {
    detailPage.innerHTML = `
      <h2>محصول مورد نظر پیدا نشد.</h2>
      \

      <a class="back-link" href="products.html">بازگشت به محصولات</a>
    `;
    return;
  }

  detailPage.innerHTML = `
    <a class="back-link" href="products.html">
      ← بازگشت به محصولات
    </a>

    <div class="detail-layout">
      <div class="gallery">
        <img id="mainPhoto"
             class="main-photo"
             src="${product.images[0]}"
             alt="${product.name}">

        <div class="thumbnails">
          ${product.images.map(image => `
            <img src="${image}"
                 alt="${product.name}"
                 onclick="changePhoto('${image}')">
          `).join("")}
        </div>
      </div>

      <div class="detail-info">
        <h1>${product.name}</h1>

        <div class="category">
          دسته‌بندی: ${product.category}
        </div>

        <p>${product.description}</p>

        <div class="detail-price">${product.price}</div>

        <h3>نت‌های رایحه</h3>

        <div class="notes">
          ${product.notes.map(note => `
            <span class="note">${note}</span>
          `).join("")}
        </div>

        <ul class="info-list">
          <li>ماندگاری مناسب و رایحه دلنشین</li>
          <li>مناسب استفاده روزانه و مهمانی</li>
          <li>بسته‌بندی شیک و مناسب هدیه</li>
          <li>ارسال به سراسر کشور</li>
        </ul>

        <button class="main-button"
                onclick="addToCart('${product.id}')">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  `;
}

function changePhoto(image) {
  const mainPhoto = document.getElementById("mainPhoto");

  if (mainPhoto) {
    mainPhoto.src = image;
  }
}

function loadCart() {
  const cartList = document.getElementById("cartList");

  if (!cartList) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty">
        سبد خرید شما خالی است.
        \
\

        <a class="main-button" href="products.html">
          مشاهده محصولات
        </a>
      </div>
    `;
    return;
  }

  const selectedProducts = cart
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  cartList.innerHTML = selectedProducts.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}">
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.short}</p>
        <span class="price">${product.price}</span>

        \


        <button class="remove-button"
                onclick="removeFromCart('${product.id}')">
          حذف از سبد
        </button>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", function() {
  loadProducts();
  loadProductDetails();
  loadCart();
  updateCartCount();
});