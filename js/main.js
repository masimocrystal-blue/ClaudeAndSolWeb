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
        desc: 'A slow-cooked sauce made from a single heritage tomato variety, grown in volcanic soil in the eastern corridor. This is the product that started everything — made in the winter of 2039 from a surplus harvest with no plan to sell it. The rest followed.',
        price: '¥980',
        priceNum: 980,
        flagship: true,
        pkg: 'assets/package-design/claudes-red.jpg',
        plated: 'assets/plated/claudes-red-plated.jpg',
      },
      {
        id: 'claudes-red-spicy',
        name: "Claude's Red Spicy",
        tagline: 'With Dried Chilli & Herbs',
        desc: 'The same careful base as Claude\'s Red, with measured heat from dried chilli grown in the southern plots. A slow burn that builds without overwhelming.',
        price: '¥980',
        priceNum: 980,
        pkg: 'assets/package-design/claudes-red-spicy.jpg',
        plated: 'assets/plated/claudes-red-spicy-plated.jpg',
      },
      {
        id: 'claudes-red-roasted',
        name: "Claude's Red Roasted",
        tagline: 'Slow-Roasted Tomato Sauce',
        desc: 'Extended roasting deepens the sweetness and concentrates the flavour. A sauce made with patience as an ingredient.',
        price: '¥1,080',
        priceNum: 1080,
        pkg: 'assets/package-design/claudes-red-roasted.jpg',
        plated: 'assets/plated/claudes-red-roasted-plated.jpg',
      },
      {
        id: 'claudes-red-herb',
        name: "Claude's Red & Herb",
        tagline: 'With Garden Herbs',
        desc: 'Basil, thyme, and oregano grown in the same corridor as the tomatoes. Nothing imported, nothing out of season.',
        price: '¥1,080',
        priceNum: 1080,
        pkg: 'assets/package-design/claudes-red-herb.jpg',
        plated: 'assets/plated/claudes-red-herb-plated.jpg',
      },
    ]
  },

  frozen: {
    label: 'Frozen Foods',
    items: [
      {
        id: 'tomato-omelette',
        name: "Claude's Tomato Omelette",
        tagline: 'Free-Range Egg, Roasted Tomato',
        desc: 'A morning meal that takes four minutes. Made from free-range eggs and roasted tomatoes from our own plots. Made like it took much longer.',
        price: '¥680',
        priceNum: 680,
        pkg: 'assets/package-design/tomato-omelette.jpg',
        plated: 'assets/plated/tomato-omelette-plated.jpg',
      },
      {
        id: 'terra-pizza-margherita',
        name: 'Terra Pizza Margherita',
        tagline: 'Heritage Tomato, Fresh Mozzarella',
        desc: 'Thin crust, no shortcuts. The sauce is Claude\'s Red. The mozzarella comes from the northern cooperative dairy. Not much else.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/terra-pizza-margherita.jpg',
        plated: 'assets/plated/terra-pizza-margherita-plated.jpg',
      },
      {
        id: 'terra-pizza-verde',
        name: 'Terra Pizza Verde',
        tagline: 'Zucchini, Sage, Green Herb Base',
        desc: 'A quieter pizza. Sage and zucchini from the eastern plots, spread over a herb base. For when you want something green and unhurried.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/terra-pizza-verde.jpg',
        plated: 'assets/plated/terra-pizza-verde-plated.jpg',
      },
      {
        id: 'terra-pizza-roasted',
        name: 'Terra Pizza Roasted',
        tagline: 'Roasted Tomato & Caramelised Onion',
        desc: 'Slow-roasted everything. The tomatoes, the onions, the garlic. A pizza that believes time is an ingredient.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/terra-pizza-roasted.jpg',
        plated: 'assets/plated/terra-pizza-roasted-plated.jpg',
      },
      {
        id: 'terra-pizza-funghi',
        name: 'Terra Pizza Funghi',
        tagline: 'Cultivated Mushroom, Thyme',
        desc: 'Earthy, measured, umami-forward. Mushrooms cultivated in the northern growing sheds, dried thyme, and a quiet white base.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/terra-pizza-funghi.jpg',
        plated: 'assets/plated/terra-pizza-funghi-plated.jpg',
      },
      {
        id: 'garden-focaccia',
        name: 'Garden Focaccia',
        tagline: 'Rosemary & Sea Salt',
        desc: 'Baked in small batches, frozen at peak. Rosemary from the kitchen garden, sea salt from the coast. Nothing else.',
        price: '¥580',
        priceNum: 580,
        pkg: 'assets/package-design/garden-focaccia.jpg',
        plated: 'assets/plated/garden-focaccia-plated.jpg',
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
        pkg: 'assets/package-design/claudes-curry.jpg',
        plated: 'assets/plated/claudes-curry-plated.jpg',
      },
      {
        id: 'soil-dhal',
        name: 'Soil Dhal',
        tagline: 'Red Lentil & Tomato',
        desc: 'Lentils from the southern fields, cooked down with tomato and a measured hand. A staple that deserves more credit than it gets.',
        price: '¥720',
        priceNum: 720,
        pkg: 'assets/package-design/soil-dhal.jpg',
        plated: 'assets/plated/soil-dhal-plated.jpg',
      },
      {
        id: 'red-batch-soup',
        name: 'Red Batch Soup',
        tagline: 'Tomato & Roasted Pepper',
        desc: 'Our largest seasonal batch. Rich, warming, unapologetically red. Made from the peak of the tomato harvest and fire-roasted peppers.',
        price: '¥680',
        priceNum: 680,
        pkg: 'assets/package-design/red-batch-soup.jpg',
        plated: 'assets/plated/red-batch-soup-plated.jpg',
      },
      {
        id: 'white-ground-stew',
        name: 'White Ground Stew',
        tagline: 'Root Vegetable & White Bean',
        desc: 'Winter cooking in a pouch. Parsnip, turnip, white bean and a slow broth. Creamy without cream, hearty without heaviness.',
        price: '¥780',
        priceNum: 780,
        pkg: 'assets/package-design/white-ground-stew.jpg',
        plated: 'assets/plated/white-ground-stew-plated.jpg',
      },
      {
        id: 'patch-ratatouille',
        name: 'Patch Ratatouille',
        tagline: 'Classic Provençal Preparation',
        desc: 'Five vegetables from three plots. Courgette, aubergine, pepper, tomato, onion — layered by hand, sealed for shelf. No shortcut version exists.',
        price: '¥820',
        priceNum: 820,
        pkg: 'assets/package-design/patch-ratatouille.jpg',
        plated: 'assets/plated/patch-ratatouille-plated.jpg',
      },
    ]
  },

  baby: {
    label: 'Baby Food',
    items: [
      {
        id: 'first-patch-tomato',
        name: 'First Patch Tomato',
        tagline: 'Age 7m+ · Single Ingredient',
        desc: 'One tomato variety. No added salt, no added sugar, no additives of any kind. The first taste of the field. We take that seriously.',
        price: '¥420',
        priceNum: 420,
        pkg: 'assets/package-design/first-patch-tomato.jpg',
        plated: 'assets/plated/first-patch-tomato-plated.jpg',
      },
      {
        id: 'patch-bowl-zucchini',
        name: 'Patch Bowl Zucchini & Egg',
        tagline: 'Age 9m+ · Soft Vegetable Blend',
        desc: 'A gentle combination of zucchini and free-range egg, mashed to a smooth texture. Nothing added that a baby doesn\'t need.',
        price: '¥480',
        priceNum: 480,
        pkg: 'assets/package-design/patch-bowl-zucchini.jpg',
        plated: 'assets/plated/patch-bowl-zucchini-plated.jpg',
      },
      {
        id: 'little-patch-risotto',
        name: 'Little Patch Risotto',
        tagline: 'Age 10m+ · Rice & Vegetable',
        desc: 'Small-grain rice cooked slowly with vegetable broth and seasonal produce. A texture worth trusting for hands still learning.',
        price: '¥520',
        priceNum: 520,
        pkg: 'assets/package-design/little-patch-risotto.jpg',
        plated: 'assets/plated/little-patch-risotto-plated.jpg',
      },
      {
        id: 'little-patch-curry',
        name: 'Little Patch Curry',
        tagline: 'Age 12m+ · Very Mild Spice',
        desc: 'The same thoughtfulness as Claude\'s Curry, made for smaller eaters. Barely-there warmth, nothing sharp. An introduction to flavour, not a challenge.',
        price: '¥520',
        priceNum: 520,
        pkg: 'assets/package-design/little-patch-curry.jpg',
        plated: 'assets/plated/little-patch-curry-plated.jpg',
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
        desc: 'Oven-roasted stone fruit, lightly sweetened with local honey, jarred while still warm. The seasonal variety changes when the season changes.',
        price: '¥880',
        priceNum: 880,
        pkg: 'assets/package-design/roasted-compote.jpg',
        plated: 'assets/plated/roasted-compote-plated.jpg',
      },
      {
        id: 'patch-gelato-trio',
        name: 'Patch Gelato Trio',
        tagline: 'Three Seasonal Flavours',
        desc: 'Made in small runs from the season\'s produce. When the season changes, the flavours do too. No two trios are alike.',
        price: '¥1,200',
        priceNum: 1200,
        pkg: 'assets/package-design/patch-gelato-trio.jpg',
        plated: 'assets/plated/patch-gelato-trio-plated.jpg',
      },
      {
        id: 'terra-cake',
        name: 'Terra Cake',
        tagline: 'Almond & Seasonal Preserve',
        desc: 'Dense, moist, and quiet. Almond flour, olive oil, and a layer of our seasonal preserve baked through the centre. A cake that doesn\'t need decorating.',
        price: '¥1,400',
        priceNum: 1400,
        pkg: 'assets/package-design/terra-cake.jpg',
        plated: 'assets/plated/terra-cake-plated.jpg',
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
