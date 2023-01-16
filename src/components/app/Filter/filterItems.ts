import { PRODUCTS } from '../DB/Products.DB';

class Filter {
  createCategory() {
    let arr = PRODUCTS;

    arr = arr.filter(
      (elem, index, self) =>
        self.findIndex((t) => {
          return t.category === elem.category && t.category === elem.category;
        }) === index
    );

    for (const prod of arr) {
      const el = document.createElement('div');

      el.classList.add('checkbox-line');

      el.innerHTML = `
        <input type="checkbox" id="${prod.category}">
        <label for="${prod.category}">${prod.category}</label>
        <span>(5/5)</span>
      `;

      const box = document.getElementById('category');

      box?.appendChild(el);
    }

    const allElement = Array.from(document.querySelectorAll('input'));

    allElement.forEach((el) => {
      function initFunction() {
        el?.addEventListener('change', () => {
          if (el.checked === true) {
            console.log(`Category ${el.id} is selected`);
          } else {
            console.log(`Category ${el.id} is not selected`);
          }
        });
      }

      initFunction();
    });
  }

  createBrand() {
    let arr = PRODUCTS;

    arr = arr.filter(
      (elem, index, self) =>
        self.findIndex((t) => {
          return t.brand === elem.brand && t.brand === elem.brand;
        }) === index
    );

    for (const prod of arr) {
      const el = document.createElement('div');

      el.classList.add('checkbox-line');

      el.innerHTML = `
        <input type="checkbox" id="${prod.brand}">
        <label for="${prod.brand}">${prod.brand}</label>
        <span>(5/5)</span>
      `;

      const box2 = document.getElementById('brand');

      box2?.appendChild(el);
    }

    const allElement = Array.from(document.querySelectorAll('input'));

    allElement.forEach((el) => {
      function initFunction() {
        el?.addEventListener('change', () => {
          if (el.checked === true) {
            console.log(`Brand ${el.id} is selected`);
          } else {
            console.log(`Brand ${el.id} is not selected`);
          }
        });
      }

      initFunction();
    });
  }

  createPrice() {
    const el = document.createElement('div');

    el.classList.add('range');

    el.innerHTML = `
      <div class="filters-price__slider" id="range-price"></div>
      <div class="filters-price__inputs">
        <label class="filters-price__label">
          <input type="number" min="10" max="1749" placeholder="10" class="filters-price__input" id="input-0">
        </label>
        <label class="filters-price__label">
          <input type="number" min="10" max="1749" placeholder="1749" class="filters-price__input" id="input-1">
        </label>
      </div>
    `;

    const box = document.getElementById('price');

    box?.appendChild(el);
  }

  createStock() {
    const el = document.createElement('div');

    el.classList.add('range');

    el.innerHTML = `
      <div class="filters-price__slider" id="range-stock"></div>
      <div class="filters-price__inputs">
        <label class="filters-price__label">
          <input type="number" min="2" max="150" placeholder="2" class="filters-price__input" id="input-2">
        </label>
        <label class="filters-price__label">
          <input type="number" min="2" max="150" placeholder="150" class="filters-price__input" id="input-3">
        </label>
      </div>
    `;

    const box = document.getElementById('stock');

    box?.appendChild(el);
  }
}

export { Filter };
