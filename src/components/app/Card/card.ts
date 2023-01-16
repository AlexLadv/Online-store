import { PRODUCTS } from '../DB/Products.DB';
import { BuyNow } from '../BuyNow/buyNow';
import ProductCard from '../ProductCard/productCard';
import LocalStorageUtil from '../Utils/localStorageUtil';
import './style.scss';

class Card {
  createCard() {
    const out = document.getElementById('cards');
    const productsStore = LocalStorageUtil.getProducts();
    let cardItem = '';

    PRODUCTS.forEach((el) => {
      let activeClass = '';
      let activeText = '';

      if (productsStore.indexOf(el.id) === -1) {
        activeText = 'ADD TO CART';
      } else {
        activeClass = ' active';
        activeText = 'DROP FROM CART';
      }

      cardItem += `
      <div class="big-item card">
        <div class="product-item ard" id="${el.id}">
          <div class="item-wrapper">
          <img class="card-img" src="${el.thumbnail}" alt="Card">
            <div class="item-text">
              <div class="item-title">${el.title}</div>
              <div class="item-info">
                <div class="item-info-item">
                  <p>
                    <span>Category: </span>${el.category}
                  </p>
                  <p>
                    <span>Brand: </span>${el.brand}
                  </p>
                  <p>
                    <span>Price: </span>€${el.price}
                  </p>
                  <p>
                    <span>Discount: </span>${el.discountPercentage}
                  </p>
                  <p>
                    <span>Rating: </span>${el.rating}
                  </p>
                  <p>
                    <span>Stock: </span>${el.stock}
                  </p>
                </div>
              </div>
            </div>            
          </div>
        </div>
        <div class="item-buttons">
          <button class="add${activeClass}" id="${el.id}">${activeText}</button>
          <button class="detail" id="${el.id}">DETAILS</button>
        </div>
      </div>
      `;
    });
    out?.insertAdjacentHTML('afterbegin', cardItem);
  }

  currentCard() {
    const allCard = document.getElementsByClassName('ard') as any;

    Array.from(allCard).forEach((el: any) => {
      const currentCard = () => {
        el.addEventListener('click', () => {
          ProductCard.createModal(el.id);
          BuyNow.render();
        });
      };

      currentCard();
    });
  }

  detailCard() {
    const detailButtons = document.getElementsByClassName('detail') as any;

    Array.from(detailButtons).forEach((el: any) => {
      const detailCard = () => {
        el.addEventListener('click', () => {
          ProductCard.createModal(el.id);
          BuyNow.render();
        });
      };

      detailCard();
    });
  }
}

export { Card };
