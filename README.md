# Claude & Soil — Website

A fictional brand website for **Claude & Soil**, a fictional AI-assisted agriculture and food company set in 2046.

> **This is a fictional website.** Claude & Soil does not exist as a real company.  
> No real purchase, order, or transaction is possible here.

---

## Folder Structure

```
ClaudeAndSolWeb/
│
├── index.html              ← The entire website (one file)
│
├── css/
│   └── style.css           ← All visual design (colors, layout, fonts)
│
├── js/
│   └── main.js             ← Product data + interactive features
│
├── assets/
│   ├── hero-group/         ← Large background and story images
│   ├── package-design/     ← Product package photos (used in cards)
│   └── plated/             ← Plated / food-styled photos (used in detail views)
│
└── README.md               ← This file
```

---

## Where to Put Images

### `assets/hero-group/`
Large full-width images. Used in the hero section, about section, and gallery.

| Filename              | Used in                        |
|-----------------------|-------------------------------|
| `hero-main.jpg`       | Homepage hero background       |
| `hero-story.jpg`      | About section                  |
| `hero-gallery-1.jpg`  | Gallery section                |
| `hero-gallery-2.jpg`  | Gallery section                |

### `assets/package-design/`
Product package photos. Used in the product catalogue grid and cart.

| Filename                         | Product                    |
|----------------------------------|---------------------------|
| `claudes-red.jpg`                | Claude's Red               |
| `claudes-red-spicy.jpg`          | Claude's Red Spicy         |
| `claudes-red-roasted.jpg`        | Claude's Red Roasted       |
| `claudes-red-herb.jpg`           | Claude's Red & Herb        |
| `tomato-omelette.jpg`            | Claude's Tomato Omelette   |
| `terra-pizza-margherita.jpg`     | Terra Pizza Margherita     |
| `terra-pizza-verde.jpg`          | Terra Pizza Verde          |
| `terra-pizza-roasted.jpg`        | Terra Pizza Roasted        |
| `terra-pizza-funghi.jpg`         | Terra Pizza Funghi         |
| `garden-focaccia.jpg`            | Garden Focaccia            |
| `claudes-curry.jpg`              | Claude's Curry             |
| `soil-dhal.jpg`                  | Soil Dhal                  |
| `red-batch-soup.jpg`             | Red Batch Soup             |
| `white-ground-stew.jpg`          | White Ground Stew          |
| `patch-ratatouille.jpg`          | Patch Ratatouille          |
| `first-patch-tomato.jpg`         | First Patch Tomato         |
| `patch-bowl-zucchini.jpg`        | Patch Bowl Zucchini & Egg  |
| `little-patch-risotto.jpg`       | Little Patch Risotto       |
| `little-patch-curry.jpg`         | Little Patch Curry         |
| `roasted-compote.jpg`            | Roasted Compote            |
| `patch-gelato-trio.jpg`          | Patch Gelato Trio          |
| `terra-cake.jpg`                 | Terra Cake                 |

### `assets/plated/`
Food-styled / plated photos. Used in product detail popups and gallery.

| Filename                              | Used for                        |
|---------------------------------------|---------------------------------|
| `claudes-red-plated.jpg`              | Claude's Red detail popup       |
| `claudes-red-spicy-plated.jpg`        | Claude's Red Spicy detail       |
| `claudes-red-roasted-plated.jpg`      | Claude's Red Roasted detail     |
| `claudes-red-herb-plated.jpg`         | Claude's Red & Herb detail      |
| `tomato-omelette-plated.jpg`          | Omelette detail popup           |
| *(and so on for each product…)*       |                                 |
| `gallery-1.jpg` through `gallery-4.jpg` | Gallery section               |

**If an image is missing**, the site will show a warm placeholder — the layout won't break.

---

## How to Preview the Site Locally

You don't need to install anything. Just open the file in a browser:

1. Find the `ClaudeAndSolWeb` folder on your computer
2. Double-click `index.html`
3. It opens in your browser — that's the site

> **Note:** Some browsers block local images with certain security settings.  
> If images don't load, try right-clicking `index.html` and choosing "Open with" → Chrome or Firefox.

For the best experience, serve it with a simple local server:

```bash
# If you have Python installed (most Macs and Linux):
cd ClaudeAndSolWeb
python3 -m http.server 8000
# Then open: http://localhost:8000
```

---

## How to Publish (Free)

### Option A — GitHub Pages (recommended)
1. Create a free account at [github.com](https://github.com)
2. Create a new repository (call it anything)
3. Upload all files (keep the folder structure exactly as-is)
4. Go to Settings → Pages → Source → select `main` branch
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option B — Netlify (drag and drop)
1. Go to [netlify.com](https://netlify.com) and create a free account
2. Drag the entire `ClaudeAndSolWeb` folder onto the Netlify dashboard
3. Done — you'll get a live URL instantly

---

## What You Can Safely Edit

### Colors
Open `css/style.css` and look for the `:root` block near the top.  
All colors are defined there as variables. Change a value, save, and refresh.

```css
:root {
  --terracotta: #C05A35;   /* ← change this to adjust the accent color */
  --sage:       #7A8C6E;   /* ← border and label color */
  ...
}
```

### Product text and prices
Open `js/main.js`. The product data is at the top in a section clearly marked `PRODUCT DATA`.  
Each product has: `name`, `tagline`, `desc`, `price`. Edit those freely.

### Page copy (About section, hero text, etc.)
Open `index.html` and find the section you want to change.  
Sections are labelled with comments like `<!-- ABOUT -->` and `<!-- HERO -->`.

### Adding a product
In `js/main.js`, copy an existing product object, paste it into the right category, change the fields, and add the image to `assets/package-design/`.

---

## What Not to Change (without care)

- CSS class names — if you rename a class in CSS, you must also rename it in HTML
- The folder structure — paths like `assets/package-design/` are hardcoded
- The `id=` attributes in `index.html` — JavaScript uses these to find elements

---

*Claude & Soil is a fictional brand. All content is invented for creative purposes.*
