/* eslint-disable @typescript-eslint/no-unused-vars */
import { PRODUCTS } from '../DB/Products.DB';
import LocalStorageUtil from '../Utils/localStorageUtil';
import { CalcCartPrice } from '../CalcCartPrice/calcCartPrice';
import './shoppingCart.scss';

class ShoppingCart {
  static render() {
    const el = document.createElement('div');
    const productsStore = LocalStorageUtil.getProducts();

    el.classList.add('modal__wrapper');

    let htmlCatalog = '';
    let sumCatalog = 0;

    PRODUCTS.forEach(({ id, title, price, description, thumbnail, stock }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `        
        <div class="border shoppingCart__wrapper">
            <div class="shoppingCart__img-wrap">
              <img class="shoppingCart__img" src="${thumbnail}" alt="Card">
            </div>
            <div class="shoppingCart__card-wrap">
              <div class="shoppingCart__title">⚡️ ${title}</div>
              <div class="shoppingCart__description">Description: ${description}</div>
            </div>
            <div class="number-control">
              <div class="stock-control"> Stock: ${stock} </div>
              <div class="incDec-control counter-wrapper">
                <button data-action="plus">+</button>
                <div class="items__current" data-counter>1</div>
                <button data-action="minus">-</button>
              </div>
              <span class="amount-control"> ${price.toLocaleString()}</span>
              <span class="price-dn"> ${price.toLocaleString()}</span>
              <span> USD </span>
            </div> 
          </div>
        `;
        sumCatalog += price;
      }
    });

    el.innerHTML = `
      <ul class="modal__container">
        <div class="shoppingCart__item">
          <div class="shopping-container">
            <div class="shopping__close"></div>
            <div class="shoppingCart__body">
              ${htmlCatalog}              
            </div>
              <div class="total-cart border">
                <h2>Summary</h2>
                <div class="shopping-element__wrapper">
                  <p class="shopping-element__price"> Products: 
                  <span data-counter="prod">${productsStore.length}</span></p>
                  <p class="shopping-element__price">💥 Total:
                  <span data-counter="total">${sumCatalog.toLocaleString()}</span> USD</p>
                  <div class="promo-code">
                    <input type="search" placeholder="Enter promo code" class="promo-input">
                    <span class="span">Promo for test: 'RS', 'EPM'</span>
                  </div>
                  <div class="item-buttons promo">
                    <button class="item-buttons" id="buy" onclick="">BUY NOW</button> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="btn bg-contain close" onclick="modal.innerHTML = ''">X</button>         
        </div>
      </ul>      
    `;

    const box = document.getElementById('modal');

    box?.appendChild(el);
  }
}

export { ShoppingCart };
