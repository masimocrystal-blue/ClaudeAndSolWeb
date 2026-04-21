/* ============================================================
   Claude & Soil — main.js

   This file does three things:
   1. Stores all product data (edit this to change products)
   2. Builds the product catalogue on the page
   3. Handles cart, modals, and navigation behaviour
   ============================================================ */


/* ============================================================
   PRODUCT DATA
   To add or change a product, edit the objects below.

   Fields:
     id       — unique name, no spaces (used for filenames)
     name     — product name shown on cards
     tagline  — short subtitle
     desc     — paragraph shown in the product detail popup
     price    — display price (string, e.g. '¥980')
     priceNum — numeric price for cart total
     flagship — set to true for Claude's Red badge
     pkg      — path to the package-design image
     plated   — path to the plated/detail image
   ============================================================ */

const PRODUCTS = {

  sauces: {
    label: 'Bottled Sauces',
    items: [
      {
        id: 'claudes-red',
        name: "Claude's Red",
        tagline: 'The Original Tomato Sauce',
        desc: 'The sauce that started everything. One tomato variety — a lineage we have been growing since 2026, cooked down with salt and olive oil, nothing else. Made the same way it was the first time.',
        price: '¥980',
        priceNum: 980,
        flagship: true,
        pkg: 'assets/package-design/claudes-red.png',
        plated: 'assets/plated/claudes-red-plated.png',
      },
      {
        id: 'claudes-red-spicy',
        name: "Claude's Red Spicy",
        tagline: 'With Chili & Garlic',
        desc: 'The same careful base as Claude\'s Red, with dried chili and garlic. A slow burn that builds without overwhelming. Nothing added that isn\'t already growing here.',
        price: '¥980',
        priceNum: 980,
        pkg: 'assets/package-design/claudes-red-spicy.png',
        plated: 'assets/plated/claudes-red-spicy-plated.png',
      },
      {
        id: 'claudes-red-roasted',
        name: "Claude's Red Roasted",
        tagline: 'Slow-Roasted Tomato Sauce',
        desc: 'Extended roasting deepens the sweetness and concentrates the flavour. A sauce made with patience as an ingredient.',
        price: '¥1,080',
        priceNum: 1080,
        pkg: 'assets/package-design/claudes-red-roasted.png',
        plated: 'assets/plated/claudes-red-roasted-plated.png',
      },
      {
        id: 'claudes-red-herb',
        name: "Claude's Red & Herb",
        tagline: 'With Garden Herbs',
        desc: 'Basil and oregano grown alongside the tomatoes. The herbs and the fruit have been in the same soil. That proximity shows in the flavour.',
        price: '¥1,080',
        priceNum: 1080,
        pkg: 'assets/package-design/claudes-red-herb.png',
        plated: 'assets/plated/claudes-red-herb-plated.png',
      },
    ]
  },

  frozen: {
    label: 'Frozen Foods',
    items: [
      {
        id: 'claudes-tomato-omelette',
        name: "Claude's Tomato Omelette",
        tagline: 'Free-Range Egg, Roasted Tomato',
        desc: 'A morning meal that takes four minutes. Made from free-range eggs and roasted tomatoes from our own plots. Made like it took much longer.',
        price: '¥680',
        priceNum: 680,
        pkg: 'assets/package-design/claudes-tomato-omelette.png',
        plated: 'assets/plated/claudes-tomato-omelette-plated.png',
      },
      {
        id: 'terra-pizza-margherita',
        name: 'Terra Pizza Margherita',
        tagline: 'Heritage Tomato, Fresh Mozzarella',
        desc: 'Thin crust, no shortcuts. The sauce is Claude\'s Red. The mozzarella comes from the northern cooperative dairy. Not much else.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/terra-pizza-margherita.png',
        plated: 'assets/plated/terra-pizza-margherita-plated.png',
      },
      {
        id: 'terra-pizza-verde',
        name: 'Terra Pizza Verde',
        tagline: 'Zucchini, Sage, Green Herb Base',
        desc: 'A quieter pizza. Sage and zucchini from the eastern plots, spread over a herb base. For when you want something green and unhurried.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/terra-pizza-verde.png',
        plated: 'assets/plated/terra-pizza-verde-plated.png',
      },
      {
        id: 'terra-pizza-roasted',
        name: 'Terra Pizza Roasted',
        tagline: 'Roasted Tomato & Caramelised Onion',
        desc: 'Slow-roasted everything. The tomatoes, the onions, the garlic. A pizza that believes time is an ingredient.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/terra-pizza-roasted.png',
        plated: 'assets/plated/terra-pizza-roasted-plated.png',
      },
      {
        id: 'terra-pizza-funghi',
        name: 'Terra Pizza Funghi',
        tagline: 'Cultivated Mushroom, Thyme',
        desc: 'Earthy, measured, umami-forward. Mushrooms cultivated in the northern growing sheds, dried thyme, and a quiet white base.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/terra-pizza-funghi.png',
        plated: 'assets/plated/terra-pizza-funghi-plated.png',
      },
      {
        id: 'garden-focaccia',
        name: 'Garden Focaccia',
        tagline: 'Rosemary & Sea Salt',
        desc: 'Baked in small batches, frozen at peak. Rosemary from the kitchen garden, sea salt from the coast. Nothing else.',
        price: '¥580',
        priceNum: 580,
        pkg: 'assets/package-design/garden-focaccia.png',
        plated: 'assets/plated/garden-focaccia-plated.png',
      },
    ]
  },

  retort: {
    label: 'Retort Meals',
    items: [
      {
        id: 'claudes-curry',
        name: "Claude's Curry",
        tagline: 'Mild Vegetable Curry',
        desc: 'Gentle heat, slow-simmered. Root vegetables and legumes from the eastern plots, cooked down with warming spices. Designed for a quiet evening.',
        price: '¥780',
        priceNum: 780,
        pkg: 'assets/package-design/claudes-curry.png',
        plated: 'assets/plated/claudes-curry-plated.png',
      },
      {
        id: 'soil-dhal',
        name: 'Soil Dhal',
        tagline: 'Red Lentil & Tomato',
        desc: 'Lentils from the southern fields, cooked down with tomato and a measured hand. A staple that deserves more credit than it gets.',
        price: '¥720',
        priceNum: 720,
        pkg: 'assets/package-design/soil-dhal.png',
        plated: 'assets/plated/soil-dhal-plated.png',
      },
      {
        id: 'red-batch-soup',
        name: 'Red Batch Soup',
        tagline: 'Tomato & Roasted Pepper',
        desc: 'Our largest seasonal batch. Rich, warming, unapologetically red. Made from the peak of the tomato harvest and fire-roasted peppers.',
        price: '¥680',
        priceNum: 680,
        pkg: 'assets/package-design/red-batch-soup.png',
        plated: 'assets/plated/red-batch-soup-plated.png',
      },
      {
        id: 'white-ground-stew',
        name: 'White Ground Stew',
        tagline: 'Root Vegetable & White Bean',
        desc: 'Winter cooking in a pouch. Parsnip, turnip, white bean and a slow broth. Creamy without cream, hearty without heaviness.',
        price: '¥780',
        priceNum: 780,
        pkg: 'assets/package-design/white-ground-stew.png',
        plated: 'assets/plated/white-ground-stew-plated.png',
      },
      {
        id: 'patch-ratatouille',
        name: 'Patch Ratatouille',
        tagline: 'Classic Provençal Preparation',
        desc: 'Five vegetables from three plots. Courgette, aubergine, pepper, tomato, onion — layered by hand, sealed for shelf. No shortcut version exists.',
        price: '¥820',
        priceNum: 820,
        pkg: 'assets/package-design/patch-ratatouille.png',
        plated: 'assets/plated/patch-ratatouille-plated.png',
      },
    ]
  },

  baby: {
    label: 'Baby Food',
    items: [
      {
        id: 'first-patch-tomato',
        name: 'First Patch Tomato',
        tagline: 'Age 5m+ · Single Ingredient',
        desc: 'One tomato variety. No added salt, no added sugar, no additives of any kind. The first taste of the field. We take that seriously.',
        price: '¥420',
        priceNum: 420,
        pkg: 'assets/package-design/first-patch-tomato.png',
        plated: 'assets/plated/first-patch-tomato-plated.png',
      },
      {
        id: 'patch-bowl-zucchini-egg',
        name: 'Patch Bowl Zucchini & Egg',
        tagline: 'Age 7m+ · Soft Vegetable Blend',
        desc: 'A gentle combination of zucchini and free-range egg, mashed to a smooth texture. Nothing added that a baby doesn\'t need.',
        price: '¥480',
        priceNum: 480,
        pkg: 'assets/package-design/patch-bowl-zucchini-egg.png',
        plated: 'assets/plated/patch-bowl-zucchini-egg-plated.png',
      },
      {
        id: 'little-patch-risotto',
        name: 'Little Patch Risotto',
        tagline: 'Age 9m+ · Rice & Vegetable',
        desc: 'Small-grain rice cooked slowly with vegetable broth. Soft enough to require nothing from a mouth still learning. The texture is gentle on purpose.',
        price: '¥520',
        priceNum: 520,
        pkg: 'assets/package-design/little-patch-risotto.png',
        plated: 'assets/plated/little-patch-risotto-plated.png',
      },
      {
        id: 'little-patch-curry',
        name: 'Little Patch Curry',
        tagline: 'Age 9m+ · Very Mild Spice',
        desc: 'The same thoughtfulness as Claude\'s Curry, made for smaller eaters. Barely-there warmth, nothing sharp. An introduction to flavour, not a challenge.',
        price: '¥520',
        priceNum: 520,
        pkg: 'assets/package-design/little-patch-curry.png',
        plated: 'assets/plated/little-patch-curry-plated.png',
      },
    ]
  },

  desserts: {
    label: 'Desserts',
    items: [
      {
        id: 'roasted-compote',
        name: 'Roasted Compote',
        tagline: 'Seasonal Stone Fruit',
        desc: 'Oven-roasted stone fruit — peach, pear, plum — jarred while still warm. No added sugar. The sweetness comes only from the roasting.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/roasted-compote.png',
        plated: 'assets/plated/roasted-compote-plated.png',
      },
      {
        id: 'patch-gelato-trio',
        name: 'Patch Gelato Trio',
        tagline: 'Three Seasonal Flavours',
        desc: 'Three flavours from the field: tomato, pumpkin, beet. Made in small runs, sweetened with honey and milk, nothing artificial. The same soil in every scoop.',
        price: '¥1,200',
        priceNum: 1200,
        pkg: 'assets/package-design/patch-gelato-trio.png',
        plated: 'assets/plated/patch-gelato-trio-plated.png',
      },
      {
        id: 'terra-cake',
        name: 'Terra Cake',
        tagline: 'Carrot & Zucchini · Cream Cheese Frosting',
        desc: 'Carrot and zucchini from the field, baked into a dense and moist cake. Finished with cream cheese frosting. Vegetable-forward, not sweet-forward. A cake that earns its place on the table.',
        price: '¥1,400',
        priceNum: 1400,
        pkg: 'assets/package-design/terra-cake.png',
        plated: 'assets/plated/terra-cake-plated.png',
      },
    ]
  }

};


/* ============================================================
   CART STATE
   ============================================================ */

// Cart is just an array of { product, quantity }
let cart = [];

function cartTotal() {
  return cart.reduce((sum, entry) => sum + entry.product.priceNum * entry.qty, 0);
}

function cartCount() {
  return cart.reduce((sum, entry) => sum + entry.qty, 0);
}

function addToCart(productId) {
  // Find the product in all categories
  let found = null;
  for (const cat of Object.values(PRODUCTS)) {
    found = cat.items.find(p => p.id === productId);
    if (found) break;
  }
  if (!found) return;

  const existing = cart.find(e => e.product.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ product: found, qty: 1 });
  }

  renderCart();
  updateCartBadge();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(e => e.product.id !== productId);
  renderCart();
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const count = cartCount();
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl   = document.getElementById('cart-total');

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Nothing added yet.</p>';
    totalEl.textContent = '¥0';
    return;
  }

  container.innerHTML = cart.map(entry => `
    <div class="cart-item">
      <img
        class="cart-item-img"
        src="${entry.product.pkg}"
        alt="${entry.product.name}"
        onerror="this.classList.add('img-missing')"
      >
      <div>
        <p class="cart-item-name">${entry.product.name}</p>
        <p class="cart-item-qty">Qty: ${entry.qty}</p>
        <button class="cart-item-remove" onclick="removeFromCart('${entry.product.id}')">Remove</button>
      </div>
      <p class="cart-item-price">¥${(entry.product.priceNum * entry.qty).toLocaleString()}</p>
    </div>
  `).join('');

  totalEl.textContent = '¥' + cartTotal().toLocaleString();
}


/* ============================================================
   CART SIDEBAR OPEN / CLOSE
   ============================================================ */

function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cart-toggle').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
document.getElementById('cart-overlay').addEventListener('click', closeCart);

// Checkout button shows the fiction notice
document.getElementById('checkout-btn').addEventListener('click', () => {
  closeCart();
  openFictionModal();
});


/* ============================================================
   PRODUCT MODAL
   ============================================================ */

function openProductById(productId) {
  let found = null;
  let categoryLabel = '';
  for (const cat of Object.values(PRODUCTS)) {
    const match = cat.items.find(p => p.id === productId);
    if (match) { found = match; categoryLabel = cat.label; break; }
  }
  if (!found) return;

  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="modal-img-wrap">
      <img
        src="${found.plated}"
        alt="${found.name} — plated"
        onerror="this.src='${found.pkg}'; this.onerror=null; this.classList.add('img-missing')"
      >
    </div>
    <div class="modal-info">
      <span class="section-label">${categoryLabel}</span>
      <h3>${found.name}</h3>
      <p class="modal-tagline">${found.tagline}</p>
      <p class="modal-desc">${found.desc}</p>
      <p class="modal-price">${found.price}</p>
      <div class="modal-actions">
        <button class="btn btn-terracotta" onclick="addToCart('${found.id}'); closeProductModal();">Add to Cart</button>
        <button class="btn btn-outline-dark" onclick="closeProductModal()">Close</button>
      </div>
    </div>
  `;

  document.getElementById('product-modal').classList.add('open');
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('product-modal').classList.remove('open');
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeProductModal);
document.getElementById('modal-overlay').addEventListener('click', closeProductModal);


/* ============================================================
   FICTION NOTICE MODAL
   ============================================================ */

function openFictionModal() {
  document.getElementById('fiction-modal').classList.add('open');
  document.getElementById('fiction-modal-overlay').classList.add('open');
}

function closeFictionModal() {
  document.getElementById('fiction-modal').classList.remove('open');
  document.getElementById('fiction-modal-overlay').classList.remove('open');
}

document.getElementById('fiction-modal-close').addEventListener('click', closeFictionModal);
document.getElementById('fiction-modal-overlay').addEventListener('click', closeFictionModal);


/* ============================================================
   PRODUCT CATALOGUE — render tabs and cards
   ============================================================ */

function buildCatalogue() {
  const tabsEl = document.getElementById('cat-tabs');
  const gridEl = document.getElementById('cat-grid');

  const categoryKeys = Object.keys(PRODUCTS);

  // Build one tab per category
  tabsEl.innerHTML = categoryKeys.map((key, i) => `
    <button
      class="cat-tab ${i === 0 ? 'active' : ''}"
      data-cat="${key}"
      role="tab"
      aria-selected="${i === 0}"
    >
      ${PRODUCTS[key].label}
    </button>
  `).join('');

  // Build all product cards (hidden except active category)
  gridEl.innerHTML = categoryKeys.map(key =>
    PRODUCTS[key].items.map(product => `
      <div
        class="product-card"
        data-cat="${key}"
        style="${key !== categoryKeys[0] ? 'display:none' : ''}"
        onclick="openProductById('${product.id}')"
      >
        <img
          class="product-card-img"
          src="${product.pkg}"
          alt="${product.name}"
          onerror="this.classList.add('img-missing')"
        >
        <div class="product-card-body">
          ${product.flagship ? '<span class="product-card-badge">Flagship</span>' : ''}
          <p class="product-card-name">${product.name}</p>
          <p class="product-card-tagline">${product.tagline}</p>
          <div class="product-card-footer">
            <span class="product-card-price">${product.price}</span>
            <span class="product-card-btn">View</span>
          </div>
        </div>
      </div>
    `).join('')
  ).join('');

  // Tab click: switch active category
  tabsEl.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabsEl.querySelectorAll('.cat-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const activeCat = tab.dataset.cat;
      gridEl.querySelectorAll('.product-card').forEach(card => {
        card.style.display = card.dataset.cat === activeCat ? '' : 'none';
      });
    });
  });
}


/* ============================================================
   NAVIGATION — add background on scroll
   ============================================================ */

const nav = document.getElementById('site-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });


/* ============================================================
   KEYBOARD: close modals with Escape key
   ============================================================ */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeProductModal();
    closeCart();
    closeFictionModal();
  }
});


/* ============================================================
   INIT — run everything when the page loads
   ============================================================ */

buildCatalogue();
